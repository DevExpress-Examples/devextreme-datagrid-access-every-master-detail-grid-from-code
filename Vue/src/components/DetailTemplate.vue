<script setup lang="ts">
import { computed, ref } from 'vue';

import DxButton from 'devextreme-vue/button';
import DxDataGrid, { DxColumn, type DxDataGridTypes } from 'devextreme-vue/data-grid';
import { ArrayStore, DataSource } from 'devextreme-vue/common/data';

import { tasks } from '../data';

const props = defineProps<{
  data: DxDataGridTypes.MasterDetailTemplateData;
}>();

const detailGridInstance = ref<InstanceType<typeof DxDataGrid> | null>(null);

const dataSource = computed(() => new DataSource({
  store: new ArrayStore({
    data: tasks,
    key: 'ID',
  }),
  filter: ['EmployeeID', '=', props.data.key],
}));

function focusRow() {
  detailGridInstance.value?.instance?.option('focusedRowIndex', 0);
}
</script>

<template>
  <DxButton
    text="Focus row"
    :style="{ marginBottom: '10px' }"
    @click="focusRow"
  />

  <DxDataGrid
    ref="detailGridInstance"
    :data-source="dataSource"
    :show-borders="true"
    :focused-row-enabled="true"
  >
    <DxColumn data-field="Subject"/>
    <DxColumn data-field="StartDate"/>
    <DxColumn data-field="DueDate"/>
    <DxColumn data-field="Priority"/>
  </DxDataGrid>
</template>
