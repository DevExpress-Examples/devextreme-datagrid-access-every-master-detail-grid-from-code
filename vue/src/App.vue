<template>
  <dx-data-grid
    id="grid-container"
    :show-borders="true"
    :data-source="dataSource"
    key-expr="ID"
  >
    <dx-column
      :width="70"
      data-field="Prefix"
      caption="Title"
    />
    <dx-column data-field="FirstName"/>
    <dx-column data-field="LastName"/>
    <dx-column
      :width="170"
      data-field="Position"
    />
    <dx-column
      :width="125"
      data-field="State"
    />
    <dx-column
      data-field="BirthDate"
      data-type="date"
    />
    <dx-master-detail
      :enabled="true"
      template="masterDetailTemplate"
    />
    <div
      slot="masterDetailTemplate"
      slot-scope="employee"
    >
      <detail-template
        :template-data="employee"
      />
    </div>
  </dx-data-grid>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxMasterDetail,
} from 'devextreme-vue/data-grid';

import DetailTemplate from './DetailTemplate.vue';
import service from './data.js';

const employees = service.getEmployees();

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxMasterDetail,
    DetailTemplate
  },
  data() {
    return {
      dataSource: employees
    };
  }
};
</script>
<style>
#grid-container {
    height: 440px;
}
</style>