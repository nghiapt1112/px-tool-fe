<template>
  <div class="vx-col w-full mb-base">
    <vx-card :title="isCreate ? 'Gửi văn bản, giấy tờ' : 'Chi tiết văn bản đến'">
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <v-select
            v-if="isCreate"
            class="w-1/2"
            placeholder="Nơi nhận"
            size="small"
            label="name"
            @input="changeData('noiNhan', $event)"
            :reduce="t => t.id"
            :options="VBDComboboxData.chuyen"
            :value="VBDData.noiNhan"
          ></v-select>
        </div>
      </div>
      <div class="vx-row">
        <div class="vx-col w-full">
          <vs-textarea
            :disabled="!isCreate"
            class="w-1/2"
            @change="changeData('noiDung', $event.target.value)"
            :value="VBDData.noiDung"
            label="Nội dung"
          />
        </div>
      </div>
      <div
        class="vx-row mb-6"
        v-if="isCreate">
        <div class="vx-col w-full">
          <input ref="fileInput" style="display: none" type="file" multiple @change="selectFiles($event)">
          <vx-input-group class="w-1/2">
            <template slot="prepend">
              <div class="prepend-text btn-addon">
                <vs-button @click="$refs.fileInput.click()" color="primary">Chọn tệp</vs-button>
              </div>
            </template>
            <vs-input
              size="small"
              readonly="true"
              placeholder="Chọn tệp đính kèm"
              :value="filesTextValue"
            />
          </vx-input-group>
        </div>
        <div class="vx-col w-full">
          <a
            v-for="(fileName, indextr) in VBDData.files"
            :key="indextr"
            @click="onDownloadFile(fileName)"
            class="link-download mt-2"
          >
            {{fileName}}
          </a>
        </div>
      </div>
      <div class="vx-row" v-if="isCreate">
        <div class="vx-col w-full">
          <vs-button class="mb-2" @click="onSubmit">Lưu</vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import vSelect from 'vue-select'

  export default {
    components: {
      'v-select': vSelect,
    },
    data () {
      return {
        showError: false,
        isCreate: false
      }
    },
    computed: {
      ...mapGetters([
        'VBDData',
        'VBDComboboxData',
        'AppActiveUser'
      ]),
      filesTextValue: {
        get () {
          const { filesSelected } = this.VBDData;
          if (filesSelected && filesSelected.length) {
            const filesName = filesSelected.map(f => f.name).join(', ');
            return `${filesSelected.length} file được chọn (${filesName})`;
          }
          return null;
        }
      }
    },
    mounted () {
      const { query: { id } } = this.$route;
      this.isCreate = !id;
      id && this.vbdGetById(id);
      !id && this.resetData();
      this.vbdGetNoiNhanById();
    },
    methods: {
      ...mapActions([
        'vbnUpdateData',
        'vbdSaveData',
        'vbdGetById',
        'vbdGetNoiNhanById',
        'commonDownloadFile',
        'commonUploadFiles'
      ]),
      resetData () {
        const data = {
          filesSelected: [],
          files: [],
        };
        this.vbnUpdateData(data);
        return true;
      },
      changeData (fieldName, value) {
        const data = Object.assign({}, this.VBDData);
        data[fieldName] = value;
        this.vbnUpdateData(data);
      },
      selectFiles (e) {
        const files = e.target.files;
        const data = Object.assign({}, this.VBDData);
        data['filesSelected'] = [...files];
        this.vbnUpdateData(data);
      },
      onSubmit () {
        const data = Object.assign({}, this.VBDData);
        this.vbdSaveData(data).then((res) => {
          const { data } = res;
          const { filesSelected, vbdId } = this.VBDData;
          if (filesSelected) {
            // Upload
            filesSelected && this.commonUploadFiles({
              requestId: vbdId || data['vbdId'],
              requestType: 'VAN_BAN_DEN',
              files: filesSelected
            }).then(() => {
              this.$vs.notify({
                color: 'success',
                title: 'Lưu Văn Bản Đến',
                text: `Lưu Văn Bản Đến thành công.`
              });
              this.$router.push(`/vbd`);
            }).catch(e => {
              console.log('e', e);
            });
          } else {
            this.$vs.notify({
              color: 'success',
              title: 'Lưu Văn Bản Đến',
              text: `Lưu Văn Bản Đến thành công.`
            });
            this.$router.push(`/vbd`);
          }

        }).catch((e) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Lưu Văn Bản Đến',
            text: `Lưu Văn Bản Đến thất bại. ${e}`
          })
        })
      },
      onDownloadFile (fileName) {
        this.commonDownloadFile({ fileName });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table--container {
    font-size: .8em;
    overflow: auto;
  }

  .invoice__table--content {
    min-width: 1268px;

    td {
      &:nth-child(1), &:nth-child(5) {
        min-width: 100px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
