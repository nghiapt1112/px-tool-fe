<template>
  <div class="vx-col w-full mb-base">
    <vx-card :title="isCreate ? 'Gửi văn bản, giấy tờ' : 'Chi tiết văn bản đến'">
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <label class="vs-input--label">Nơi nhận</label>
          <multiselect
            size="small"
            v-if="isCreate"
            class="w-1/2"
            tagPlaceholder=""
            placeholder=""
            selectedLabel="Đã chọn"
            selectLabel="Click để chọn"
            deselectLabel="Click để bỏ chọn"
            :close-on-select="false"
            :preserve-search="true"
            :options="VBDComboboxData.chuyen.map(i=>i.id)"
            :custom-label="opt => VBDComboboxData.chuyen.find(obj=> obj.id == opt).name"
            :multiple="true"
            :value="VBDData.cusReceivers"
            @input="changeData('cusReceivers', $event)"
            :taggable="true"></multiselect>
          <span v-else>
            {{VBDData.noiNhan}}
          </span>
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <vs-input
            :disabled="!isCreate"
            class="w-1/2"
            @change="changeData('soPa', $event.target.value)"
            :value="VBDData.soPa"
            label="Số văn bản"
          />
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full">
          <label class="vs-input--label">Nội dung</label>
          <vs-textarea
            :disabled="!isCreate"
            class="w-1/2 text-area"
            @change="changeData('noiDung', $event.target.value)"
            :value="VBDData.noiDung"
          />
        </div>
      </div>
      <div class="vx-row mb-6">
        <div class="vx-col w-full" v-if="isCreate">
          <input ref="fileInput" style="display: none" type="file" accept="application/pdf" multiple @change="selectFiles($event)">
          <vx-input-group class="w-1/2">
            <template slot="prepend">
              <div class="prepend-text btn-addon">
                <vs-button @click="$refs.fileInput.click()" color="primary">Chọn tệp</vs-button>
              </div>
            </template>
            <vs-input
              size="small"
              readonly="true"
              placeholder="Chọn tệp đính kèm *.PDF"
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
        <div class="vx-col w-full">
          <a class="link-download" target="_blank"
             :href="getDetailLink(VBDData)">Click để hiện thông tin chi tiết</a>
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
  import Multiselect from 'vue-multiselect';

  export default {
    components: {
      'v-select': vSelect,
      Multiselect,
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
      console.log('ddddd', id);
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
      },
      showFields(vanBanDen){
        if(vanBanDen.requestType == 'KIEM_HONG' || vanBanDen.requestType == 'DAT_HANG' || vanBanDen.requestType == 'PHUONG_AN') {
          return true;
        }
        return false;
      },
      getDetailLink(vanBanDen){
        if (vanBanDen.requestType == 'KIEM_HONG') return '/pkh?id=' +vanBanDen.requestId;
        if (vanBanDen.requestType == 'DAT_HANG') return '/pdh?id=' +vanBanDen.requestId;
        if (vanBanDen.requestType == 'PHUONG_AN') return '/pa?id=' +vanBanDen.requestId;
        if (vanBanDen.requestType == 'CONG_NHAN_THANH_PHAM') return '/pcntp?id=' +vanBanDen.requestId;
        else return '#';
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

    td, th {
      &:nth-child(1), &:nth-child(5) {
        min-width: 100px;
      }
    }
  }

  .text-uppercase {
    text-transform: uppercase;
  }

</style>
