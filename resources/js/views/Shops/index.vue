<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Manage Shops</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Manage Shops</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Shops</h4>
                            <span class="pull-right">
                                <button class="btn btn-primary" @click="create_new=true" v-b-tooltip.hover :title="__('add_new_shop')">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div class="card-body">
                            <b-row class="mb-2">
                                <b-col md="3" offset-md="8">
                                    <h6 class="box-title">Search</h6>
                                    <b-form-input
                                        id="filter-input"
                                        v-model="filter"
                                        type="search"
                                        placeholder="Search"
                                    ></b-form-input>
                                </b-col>
                                <b-col md="1" class="text-center">
                                    <button class="btn btn-primary btn_refresh" v-b-tooltip.hover :title="__('refresh')" @click="getShops()">
                                        <i class="fa fa-refresh" aria-hidden="true"></i>
                                    </button>
                                </b-col>
                            </b-row>
                            <b-table
                                :items="shops"
                                :fields="fields"
                                :filter="filter"
                                :filter-included-fields="filterOn"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :sort-direction="sortDirection"
                                :bordered="true"
                                :busy="isLoading"
                                stacked="sm"
                                responsive="xl"
                                show-empty
                                small
                                class="table-responsive">

                                <template #table-busy>
                                    <div class="text-center text-black my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>

                                <template #cell(logo)="row">
                                    <img :src="row.item.logo" height="50" v-if="row.item.logo" />
                                    <span v-else>No Image</span>
                                </template>
                                <template #cell(description)="row">
                                    {{ row.item.description ? row.item.description.substring(0, 50) + '...' : '-' }}
                                </template>
                                <template #cell(address)="row">
                                    {{ row.item.address ? row.item.address.substring(0, 50) + '...' : '-' }}
                                </template>
                                <template #cell(actions)="row">
                                    <button class="btn btn-sm btn-primary" @click="edit_record = row.item" v-b-tooltip.hover :title="__('edit')"><i class="fa fa-pencil-alt"></i></button>
                                    <button class="btn btn-sm btn-danger" @click="deleteShop(row.index, row.item.id)" v-b-tooltip.hover :title="__('delete')"><i class="fa fa-trash"></i></button>
                                </template>

                            </b-table>
                            <b-row>
                                <b-col md="2" class="my-1">
                                    <label>
                                        <b-form-group
                                            :label="'Per Page'"
                                            label-for="per-page-select"
                                            label-align-sm="right"
                                            label-size="sm"
                                            class="mb-0">

                                            <b-form-select
                                                id="per-page-select"
                                                v-model="perPage"
                                                :options="pageOptions"
                                                size="sm"
                                                class="form-control form-select"
                                            ></b-form-select>
                                        </b-form-group>
                                    </label>
                                </b-col>
                                <b-col md="4" class="my-1" offset-md="6">
                                    <label>Total Records :- {{ totalRows }}</label>
                                    <b-pagination
                                        v-model="currentPage"
                                        :total-rows="totalRows"
                                        :per-page="perPage"
                                        align="fill"
                                        size="sm"
                                        class="my-0"
                                        @change="getShops"
                                    ></b-pagination>
                                </b-col>
                            </b-row>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add / Edit -->
        <app-edit-record
            v-if="create_new || edit_record"
            :record="edit_record"
            @modalClose="hideModal()"
        ></app-edit-record>
    </div>
</template>

<script>
import EditRecord from './Edit.vue';

export default {
    components: {
        'app-edit-record': EditRecord,
    },
    data: function() {
        return {
            fields: [
                { key: 'id', label: 'ID', class: 'text-center', sortable: true, sortDirection: 'asc' },
                { key: 'name', label: 'Name', class: 'text-center', sortable: true },
                { key: 'logo', label: 'Logo', class: 'text-center' },
                { key: 'description', label: 'Description', class: 'text-center', sortable: true },
                { key: 'mobile_number', label: 'Mobile Number', class: 'text-center', sortable: true },
                { key: 'whatsapp_number', label: 'WhatsApp Number', class: 'text-center', sortable: true },
                { key: 'address', label: 'Address', class: 'text-center', sortable: true },
                { key: 'actions', label: 'Actions', class: 'text-center' }
            ],
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
        }
    },
    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return { text: f.label, value: f.key }
                })
        },
        filteredShops: function() {
            const query = this.filter ? this.filter.toLowerCase() : '';
            return this.shops.filter(shop => {
                return (
                    shop.name.toLowerCase().includes(query) ||
                    (shop.description && shop.description.toLowerCase().includes(query))
                );
            });
        },
    },
    mounted() {
       
    },
    watch: {
        $route(to, from) {
            this.showCreateModal();
        },
        currentPage(newPage) {
            this.getShops();
        },
        perPage(newPerPage) {
            this.getShops();
        }
    },
    created: function() {
        this.showCreateModal();
        this.$eventBus.$on('shopSaved', (message) => {
            this.showMessage("success", message);
            this.getShops();
            this.create_new = null;
            this.edit_record = null;
        });
        this.getShops();
    },
    methods: {
        getShops() {
            this.isLoading = true;
            const params = {
                page: this.currentPage,
                per_page: this.perPage,
                filter: this.filter
            };
            axios.get(this.$apiUrl + '/shops', { params })
                .then((response) => {
                    this.isLoading = false;
                    let data = response.data;
                    this.shops = data.data || [];
                    this.totalRows = data.total || 0;
                    this.currentPage = data.current_page || this.currentPage;
                })
                .catch((error) => {
                    this.isLoading = false;
                    console.error('Error fetching shops:', error);
                });
        },

        deleteShop(index, id) {
            this.$swal.fire({
                title: "Are you Sure?",
                text: "You won't be able to revert this!",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then(result => {
                if (result.value) {
                    this.isLoading = true;
                    axios.delete(this.$apiUrl + `/shops/${id}`)
                        .then((response) => {
                            this.isLoading = false;
                            let data = response.data;
                            this.getShops();
                            this.showMessage('success', data.message || 'Shop deleted successfully!');
                        })
                        .catch((error) => {
                            this.isLoading = false;
                            console.error('Error deleting shop:', error);
                            this.showMessage('error', 'Failed to delete shop.');
                        });
                }
            });
        },
        showCreateModal() {
            let create = this.$route.params.create;
            if (create) {
                this.create_new = true;
            }
        },
        hideModal() {
            this.create_new = false;
            this.edit_record = false;
            this.$router.push({ path: '/shops' });
        },
    }
};
</script>