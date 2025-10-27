"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Shops_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ShopEditRecord',
  props: {
    record: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      form: {
        name: '',
        description: '',
        mobile_number: '',
        whatsapp_number: '',
        address: '',
        logo: null,
        banner: null
      },
      errors: {},
      editMode: false,
      previewLogo: null,
      previewBanner: null,
      submitting: false
    };
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.form.name && !this.submitting;
    }
  },
  watch: {
    record: {
      handler: function handler(newVal) {
        if (newVal && newVal.id) {
          this.editMode = true;
          this.form = _objectSpread(_objectSpread({}, newVal), {}, {
            logo: null,
            banner: null
          });
          this.previewLogo = newVal.logo;
          this.previewBanner = newVal.banner;
        } else {
          this.editMode = false;
          this.resetForm();
        }
      },
      immediate: true
    },
    'form.logo': function formLogo(file) {
      if (file) {
        this.previewLogo = URL.createObjectURL(file);
      } else {
        this.previewLogo = null;
      }
    },
    'form.banner': function formBanner(file) {
      if (file) {
        this.previewBanner = URL.createObjectURL(file);
      } else {
        this.previewBanner = null;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$refs.modal.show();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.previewLogo) URL.revokeObjectURL(this.previewLogo);
    if (this.previewBanner) URL.revokeObjectURL(this.previewBanner);
  },
  methods: {
    formatFileName: function formatFileName(originalFile) {
      return originalFile.name;
    },
    resetForm: function resetForm() {
      this.form = {
        name: '',
        description: '',
        mobile_number: '',
        whatsapp_number: '',
        address: '',
        logo: null,
        banner: null
      };
      this.errors = {};
      this.previewLogo = null;
      this.previewBanner = null;
    },
    submitForm: function submitForm() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, response, _error$response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.isFormValid) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _this2.submitting = true;
                _this2.errors = {};
                _context.prev = 4;
                formData = new FormData();
                formData.append('name', _this2.form.name);
                if (_this2.form.description) formData.append('description', _this2.form.description);
                if (_this2.form.mobile_number) formData.append('mobile_number', _this2.form.mobile_number);
                if (_this2.form.whatsapp_number) formData.append('whatsapp_number', _this2.form.whatsapp_number);
                if (_this2.form.address) formData.append('address', _this2.form.address);
                if (_this2.form.logo) formData.append('logo', _this2.form.logo);
                if (_this2.form.banner) formData.append('banner', _this2.form.banner);

                if (!_this2.editMode) {
                  _context.next = 20;
                  break;
                }

                formData.append('_method', 'PUT');
                _context.next = 17;
                return axios.post("".concat(_this2.$apiUrl, "/shops/").concat(_this2.record.id), formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 17:
                response = _context.sent;
                _context.next = 23;
                break;

              case 20:
                _context.next = 22;
                return axios.post("".concat(_this2.$apiUrl, "/shops"), formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 22:
                response = _context.sent;

              case 23:
                _this2.$eventBus.$emit('shopSaved', response.data.message || (_this2.editMode ? 'Shop updated successfully!' : 'Shop created successfully!'));

                _this2.$refs.modal.hide();

                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](4);

                if (((_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422) {
                  _this2.errors = _context.t0.response.data.errors || {};
                } else {
                  console.error('Error saving shop:', _context.t0);

                  _this2.$swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: _this2.editMode ? 'Failed to update shop.' : 'Failed to create shop.'
                  });
                }

              case 30:
                _context.prev = 30;
                _this2.submitting = false;
                return _context.finish(30);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 27, 30, 33]]);
      }))();
    },
    handleOk: function handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.submitForm();
    },
    handleCancel: function handleCancel() {
      this.$emit('modalClose');
      this.resetForm();
    },
    hideModal: function hideModal() {
      this.$refs.modal.hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue */ "./resources/js/views/Shops/Edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'app-edit-record': _Edit_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'ID',
        "class": 'text-center',
        sortable: true,
        sortDirection: 'asc'
      }, {
        key: 'name',
        label: 'Name',
        "class": 'text-center',
        sortable: true
      }, {
        key: 'logo',
        label: 'Logo',
        "class": 'text-center'
      }, {
        key: 'description',
        label: 'Description',
        "class": 'text-center',
        sortable: true
      }, {
        key: 'mobile_number',
        label: 'Mobile Number',
        "class": 'text-center',
        sortable: true
      }, {
        key: 'whatsapp_number',
        label: 'WhatsApp Number',
        "class": 'text-center',
        sortable: true
      }, {
        key: 'address',
        label: 'Address',
        "class": 'text-center',
        sortable: true
      }, {
        key: 'actions',
        label: 'Actions',
        "class": 'text-center'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: this.$perPage || 10,
      pageOptions: this.$pageOptions || [5, 10, 25, 50],
      sortBy: 'id',
      sortDesc: true,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      page: 1,
      shops: [],
      isLoading: false,
      create_new: null,
      edit_record: null,
      settingModalShow: false
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    filteredShops: function filteredShops() {
      var query = this.filter ? this.filter.toLowerCase() : '';
      return this.shops.filter(function (shop) {
        return shop.name.toLowerCase().includes(query) || shop.description && shop.description.toLowerCase().includes(query);
      });
    }
  },
  mounted: function mounted() {},
  watch: {
    $route: function $route(to, from) {
      this.showCreateModal();
    },
    currentPage: function currentPage(newPage) {
      this.getShops();
    },
    perPage: function perPage(newPerPage) {
      this.getShops();
    }
  },
  created: function created() {
    var _this = this;

    this.showCreateModal();
    this.$eventBus.$on('shopSaved', function (message) {
      _this.showMessage("success", message);

      _this.getShops();

      _this.create_new = null;
      _this.edit_record = null;
    });
    this.getShops();
  },
  methods: {
    getShops: function getShops() {
      var _this2 = this;

      this.isLoading = true;
      var params = {
        page: this.currentPage,
        per_page: this.perPage,
        filter: this.filter
      };
      axios.get(this.$apiUrl + '/shops', {
        params: params
      }).then(function (response) {
        _this2.isLoading = false;
        var data = response.data;
        _this2.shops = data.data || [];
        _this2.totalRows = data.total || 0;
        _this2.currentPage = data.current_page || _this2.currentPage;
      })["catch"](function (error) {
        _this2.isLoading = false;
        console.error('Error fetching shops:', error);
      });
    },
    deleteShop: function deleteShop(index, id) {
      var _this3 = this;

      this.$swal.fire({
        title: "Are you Sure?",
        text: "You won't be able to revert this!",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#37a279',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (result.value) {
          _this3.isLoading = true;
          axios["delete"](_this3.$apiUrl + "/shops/".concat(id)).then(function (response) {
            _this3.isLoading = false;
            var data = response.data;

            _this3.getShops();

            _this3.showMessage('success', data.message || 'Shop deleted successfully!');
          })["catch"](function (error) {
            _this3.isLoading = false;
            console.error('Error deleting shop:', error);

            _this3.showMessage('error', 'Failed to delete shop.');
          });
        }
      });
    },
    showCreateModal: function showCreateModal() {
      var create = this.$route.params.create;

      if (create) {
        this.create_new = true;
      }
    },
    hideModal: function hideModal() {
      this.create_new = false;
      this.edit_record = false;
      this.$router.push({
        path: '/shops'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Shops/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Shops/Edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=54e0cd1b& */ "./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shops/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shops/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Shops/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=117e7031& */ "./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Shops/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shops/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shops/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Shops/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_54e0cd1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=54e0cd1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b&");


/***/ }),

/***/ "./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_117e7031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=117e7031& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/Edit.vue?vue&type=template&id=54e0cd1b& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "modal",
      attrs: {
        id: "edit-record-modal",
        title: _vm.editMode ? "Edit Shop" : "Add Shop",
        "ok-title": "Save",
        "cancel-title": "Cancel",
        size: "lg",
        "ok-disabled": !_vm.isFormValid,
        "body-class": "p-3 p-md-4",
      },
      on: { ok: _vm.handleOk, cancel: _vm.handleCancel },
    },
    [
      _c(
        "b-form",
        {
          staticClass: "needs-validation",
          attrs: { novalidate: "" },
          on: {
            submit: function ($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.submitForm.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "b-row",
            { staticClass: "mb-3" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "name-group",
                        label: "Name",
                        "label-for": "name-input",
                        "invalid-feedback": _vm.errors.name,
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control-lg",
                        attrs: {
                          id: "name-input",
                          state: _vm.errors.name ? false : null,
                          required: "",
                          trim: "",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-3" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "description-group",
                        label: "Description",
                        "label-for": "description-input",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-textarea", {
                        staticClass: "form-control-lg",
                        attrs: {
                          id: "description-input",
                          rows: "3",
                          "max-rows": "6",
                        },
                        model: {
                          value: _vm.form.description,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-3" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "mobile-group",
                        label: "Mobile Number",
                        "label-for": "mobile-input",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control-lg",
                        attrs: { id: "mobile-input", type: "tel" },
                        model: {
                          value: _vm.form.mobile_number,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "mobile_number", $$v)
                          },
                          expression: "form.mobile_number",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "whatsapp-group",
                        label: "WhatsApp Number",
                        "label-for": "whatsapp-input",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control-lg",
                        attrs: { id: "whatsapp-input", type: "tel" },
                        model: {
                          value: _vm.form.whatsapp_number,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "whatsapp_number", $$v)
                          },
                          expression: "form.whatsapp_number",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-3" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "address-group",
                        label: "Address",
                        "label-for": "address-input",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-textarea", {
                        staticClass: "form-control-lg",
                        attrs: {
                          id: "address-input",
                          rows: "3",
                          "max-rows": "6",
                        },
                        model: {
                          value: _vm.form.address,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "address", $$v)
                          },
                          expression: "form.address",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-3" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "logo-group",
                        label: "Logo",
                        "label-for": "logo-file",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-file", {
                        staticClass: "form-control-lg",
                        attrs: {
                          id: "logo-file",
                          accept: "image/jpeg,image/png,image/jpg,image/webp",
                          "file-name-formatter": _vm.formatFileName,
                          placeholder: "Choose a logo file or drop it here...",
                        },
                        model: {
                          value: _vm.form.logo,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "logo", $$v)
                          },
                          expression: "form.logo",
                        },
                      }),
                      _vm._v(" "),
                      _vm.previewLogo
                        ? _c("div", { staticClass: "mt-2" }, [
                            _c("img", {
                              staticClass: "img-thumbnail rounded",
                              attrs: { src: _vm.previewLogo, height: "80" },
                            }),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "banner-group",
                        label: "Banner",
                        "label-for": "banner-file",
                        "label-class": "font-weight-bold",
                      },
                    },
                    [
                      _c("b-form-file", {
                        staticClass: "form-control-lg",
                        attrs: {
                          id: "banner-file",
                          accept: "image/jpeg,image/png,image/jpg,image/webp",
                          "file-name-formatter": _vm.formatFileName,
                          placeholder:
                            "Choose a banner file or drop it here...",
                        },
                        model: {
                          value: _vm.form.banner,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "banner", $$v)
                          },
                          expression: "form.banner",
                        },
                      }),
                      _vm._v(" "),
                      _vm.previewBanner
                        ? _c("div", { staticClass: "mt-2" }, [
                            _c("img", {
                              staticClass: "img-thumbnail rounded",
                              attrs: { src: _vm.previewBanner, height: "80" },
                            }),
                          ])
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Shops/index.vue?vue&type=template&id=117e7031& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "page-heading" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-6 order-md-2 order-first" }, [
            _c(
              "nav",
              {
                staticClass: "breadcrumb-header float-start float-lg-end",
                attrs: { "aria-label": "breadcrumb" },
              },
              [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: "/dashboard" } }, [
                        _vm._v("Dashboard"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" },
                    },
                    [_vm._v("Manage Shops")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h4", [_vm._v("Shops")]),
                _vm._v(" "),
                _c("span", { staticClass: "pull-right" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true },
                        },
                      ],
                      staticClass: "btn btn-primary",
                      attrs: { title: _vm.__("add_new_shop") },
                      on: {
                        click: function ($event) {
                          _vm.create_new = true
                        },
                      },
                    },
                    [_c("i", { staticClass: "fa fa-plus" })]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "3", "offset-md": "8" } },
                        [
                          _c("h6", { staticClass: "box-title" }, [
                            _vm._v("Search"),
                          ]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              id: "filter-input",
                              type: "search",
                              placeholder: "Search",
                            },
                            model: {
                              value: _vm.filter,
                              callback: function ($$v) {
                                _vm.filter = $$v
                              },
                              expression: "filter",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-center", attrs: { md: "1" } },
                        [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true },
                                },
                              ],
                              staticClass: "btn btn-primary btn_refresh",
                              attrs: { title: _vm.__("refresh") },
                              on: {
                                click: function ($event) {
                                  return _vm.getShops()
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-refresh",
                                attrs: { "aria-hidden": "true" },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-table", {
                    staticClass: "table-responsive",
                    attrs: {
                      items: _vm.shops,
                      fields: _vm.fields,
                      filter: _vm.filter,
                      "filter-included-fields": _vm.filterOn,
                      "sort-by": _vm.sortBy,
                      "sort-desc": _vm.sortDesc,
                      "sort-direction": _vm.sortDirection,
                      bordered: true,
                      busy: _vm.isLoading,
                      stacked: "sm",
                      responsive: "xl",
                      "show-empty": "",
                      small: "",
                    },
                    on: {
                      "update:sortBy": function ($event) {
                        _vm.sortBy = $event
                      },
                      "update:sort-by": function ($event) {
                        _vm.sortBy = $event
                      },
                      "update:sortDesc": function ($event) {
                        _vm.sortDesc = $event
                      },
                      "update:sort-desc": function ($event) {
                        _vm.sortDesc = $event
                      },
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "table-busy",
                        fn: function () {
                          return [
                            _c(
                              "div",
                              { staticClass: "text-center text-black my-2" },
                              [
                                _c("b-spinner", {
                                  staticClass: "align-middle",
                                }),
                                _vm._v(" "),
                                _c("strong", [_vm._v("Loading...")]),
                              ],
                              1
                            ),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "cell(logo)",
                        fn: function (row) {
                          return [
                            row.item.logo
                              ? _c("img", {
                                  attrs: { src: row.item.logo, height: "50" },
                                })
                              : _c("span", [_vm._v("No Image")]),
                          ]
                        },
                      },
                      {
                        key: "cell(description)",
                        fn: function (row) {
                          return [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  row.item.description
                                    ? row.item.description.substring(0, 50) +
                                        "..."
                                    : "-"
                                ) +
                                "\n                            "
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(address)",
                        fn: function (row) {
                          return [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  row.item.address
                                    ? row.item.address.substring(0, 50) + "..."
                                    : "-"
                                ) +
                                "\n                            "
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(actions)",
                        fn: function (row) {
                          return [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true },
                                  },
                                ],
                                staticClass: "btn btn-sm btn-primary",
                                attrs: { title: _vm.__("edit") },
                                on: {
                                  click: function ($event) {
                                    _vm.edit_record = row.item
                                  },
                                },
                              },
                              [_c("i", { staticClass: "fa fa-pencil-alt" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true },
                                  },
                                ],
                                staticClass: "btn btn-sm btn-danger",
                                attrs: { title: _vm.__("delete") },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteShop(
                                      row.index,
                                      row.item.id
                                    )
                                  },
                                },
                              },
                              [_c("i", { staticClass: "fa fa-trash" })]
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c("b-col", { staticClass: "my-1", attrs: { md: "2" } }, [
                        _c(
                          "label",
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mb-0",
                                attrs: {
                                  label: "Per Page",
                                  "label-for": "per-page-select",
                                  "label-align-sm": "right",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-form-select", {
                                  staticClass: "form-control form-select",
                                  attrs: {
                                    id: "per-page-select",
                                    options: _vm.pageOptions,
                                    size: "sm",
                                  },
                                  model: {
                                    value: _vm.perPage,
                                    callback: function ($$v) {
                                      _vm.perPage = $$v
                                    },
                                    expression: "perPage",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          staticClass: "my-1",
                          attrs: { md: "4", "offset-md": "6" },
                        },
                        [
                          _c("label", [
                            _vm._v("Total Records :- " + _vm._s(_vm.totalRows)),
                          ]),
                          _vm._v(" "),
                          _c("b-pagination", {
                            staticClass: "my-0",
                            attrs: {
                              "total-rows": _vm.totalRows,
                              "per-page": _vm.perPage,
                              align: "fill",
                              size: "sm",
                            },
                            on: { change: _vm.getShops },
                            model: {
                              value: _vm.currentPage,
                              callback: function ($$v) {
                                _vm.currentPage = $$v
                              },
                              expression: "currentPage",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm.create_new || _vm.edit_record
        ? _c("app-edit-record", {
            attrs: { record: _vm.edit_record },
            on: {
              modalClose: function ($event) {
                return _vm.hideModal()
              },
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-6 order-md-1 order-last" }, [
      _c("h3", [_vm._v("Manage Shops")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);