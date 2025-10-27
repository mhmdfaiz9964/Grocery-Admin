<template>
  <b-modal
    id="edit-record-modal"
    :title="editMode ? 'Edit Shop' : 'Add Shop'"
    @ok="handleOk"
    @cancel="handleCancel"
    ok-title="Save"
    cancel-title="Cancel"
    ref="modal"
    size="lg"
    :ok-disabled="!isFormValid"
    body-class="p-3 p-md-4"
  >
    <b-form @submit.stop.prevent="submitForm" novalidate class="needs-validation">
      <b-row class="mb-3">
        <b-col cols="12">
          <b-form-group
            id="name-group"
            label="Name"
            label-for="name-input"
            :invalid-feedback="errors.name"
            label-class="font-weight-bold"
          >
            <b-form-input
              id="name-input"
              v-model="form.name"
              :state="errors.name ? false : null"
              required
              trim
              class="form-control-lg"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="12">
          <b-form-group
            id="description-group"
            label="Description"
            label-for="description-input"
            label-class="font-weight-bold"
          >
            <b-form-textarea
              id="description-input"
              v-model="form.description"
              rows="3"
              max-rows="6"
              class="form-control-lg"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="12" md="6">
          <b-form-group
            id="mobile-group"
            label="Mobile Number"
            label-for="mobile-input"
            label-class="font-weight-bold"
          >
            <b-form-input
              id="mobile-input"
              v-model="form.mobile_number"
              type="tel"
              class="form-control-lg"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="whatsapp-group"
            label="WhatsApp Number"
            label-for="whatsapp-input"
            label-class="font-weight-bold"
          >
            <b-form-input
              id="whatsapp-input"
              v-model="form.whatsapp_number"
              type="tel"
              class="form-control-lg"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="12">
          <b-form-group
            id="address-group"
            label="Address"
            label-for="address-input"
            label-class="font-weight-bold"
          >
            <b-form-textarea
              id="address-input"
              v-model="form.address"
              rows="3"
              max-rows="6"
              class="form-control-lg"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col cols="12" md="6">
          <b-form-group
            id="logo-group"
            label="Logo"
            label-for="logo-file"
            label-class="font-weight-bold"
          >
            <b-form-file
              id="logo-file"
              v-model="form.logo"
              accept="image/jpeg,image/png,image/jpg,image/webp"
              :file-name-formatter="formatFileName"
              placeholder="Choose a logo file or drop it here..."
              class="form-control-lg"
            ></b-form-file>
            <div v-if="previewLogo" class="mt-2">
              <img :src="previewLogo" height="80" class="img-thumbnail rounded" />
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="banner-group"
            label="Banner"
            label-for="banner-file"
            label-class="font-weight-bold"
          >
            <b-form-file
              id="banner-file"
              v-model="form.banner"
              accept="image/jpeg,image/png,image/jpg,image/webp"
              :file-name-formatter="formatFileName"
              placeholder="Choose a banner file or drop it here..."
              class="form-control-lg"
            ></b-form-file>
            <div v-if="previewBanner" class="mt-2">
              <img :src="previewBanner" height="80" class="img-thumbnail rounded" />
            </div>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'ShopEditRecord',
  props: {
    record: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        mobile_number: '',
        whatsapp_number: '',
        address: '',
        logo: null,
        banner: null,
      },
      errors: {},
      editMode: false,
      previewLogo: null,
      previewBanner: null,
      submitting: false,
    };
  },
  computed: {
    isFormValid() {
      return this.form.name && !this.submitting;
    },
  },
  watch: {
    record: {
      handler(newVal) {
        if (newVal && newVal.id) {
          this.editMode = true;
          this.form = {
            ...newVal,
            logo: null,
            banner: null,
          };
          this.previewLogo = newVal.logo;
          this.previewBanner = newVal.banner;
        } else {
          this.editMode = false;
          this.resetForm();
        }
      },
      immediate: true,
    },
    'form.logo'(file) {
      if (file) {
        this.previewLogo = URL.createObjectURL(file);
      } else {
        this.previewLogo = null;
      }
    },
    'form.banner'(file) {
      if (file) {
        this.previewBanner = URL.createObjectURL(file);
      } else {
        this.previewBanner = null;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.modal.show();
    });
  },
  beforeDestroy() {
    if (this.previewLogo) URL.revokeObjectURL(this.previewLogo);
    if (this.previewBanner) URL.revokeObjectURL(this.previewBanner);
  },
  methods: {
    formatFileName(originalFile) {
      return originalFile.name;
    },
    resetForm() {
      this.form = {
        name: '',
        description: '',
        mobile_number: '',
        whatsapp_number: '',
        address: '',
        logo: null,
        banner: null,
      };
      this.errors = {};
      this.previewLogo = null;
      this.previewBanner = null;
    },
    async submitForm() {
      if (!this.isFormValid) return;

      this.submitting = true;
      this.errors = {};

      try {
        const formData = new FormData();
        formData.append('name', this.form.name);
        if (this.form.description) formData.append('description', this.form.description);
        if (this.form.mobile_number) formData.append('mobile_number', this.form.mobile_number);
        if (this.form.whatsapp_number) formData.append('whatsapp_number', this.form.whatsapp_number);
        if (this.form.address) formData.append('address', this.form.address);

        if (this.form.logo) formData.append('logo', this.form.logo);
        if (this.form.banner) formData.append('banner', this.form.banner);

        let response;
        if (this.editMode) {
          formData.append('_method', 'PUT');
          response = await axios.post(`${this.$apiUrl}/shops/${this.record.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
        } else {
          response = await axios.post(`${this.$apiUrl}/shops`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
        }

        this.$eventBus.$emit('shopSaved', response.data.message || (this.editMode ? 'Shop updated successfully!' : 'Shop created successfully!'));
        this.$refs.modal.hide();
      } catch (error) {
        if (error.response?.status === 422) {
          this.errors = error.response.data.errors || {};
        } else {
          console.error('Error saving shop:', error);
          this.$swal.fire({
            icon: 'error',
            title: 'Error!',
            text: this.editMode ? 'Failed to update shop.' : 'Failed to create shop.',
          });
        }
      } finally {
        this.submitting = false;
      }
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitForm();
    },
    handleCancel() {
      this.$emit('modalClose');
      this.resetForm();
    },
    hideModal() {
      this.$refs.modal.hide();
    },
  },
};
</script>