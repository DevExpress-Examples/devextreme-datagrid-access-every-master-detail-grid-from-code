<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxDataGrid, { DxColumn, DxMasterDetail } from 'devextreme-vue/data-grid';

import DetailTemplate from './DetailTemplate.vue';
import { employees } from '../data';
</script>

<template>
  <DxDataGrid
    id="grid-container"
    :data-source="employees"
    key-expr="ID"
    :show-borders="true"
  >
    <DxColumn data-field="FirstName"/>
    <DxColumn data-field="LastName"/>
    <DxColumn data-field="Position"/>
    <DxColumn data-field="State"/>
    <DxColumn data-field="BirthDate"/>

    <DxMasterDetail
      :enabled="true"
      template="detail"
    />

    <template #detail="{ data: employee }">
      <DetailTemplate :data="employee"/>
    </template>
  </DxDataGrid>
</template>
