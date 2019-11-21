<template>
  <div>
    <el-button @click="addRow">增加一行</el-button>
    <el-button @click="hiddenKeyColumn" v-if="!listConfig.columns[2].hidden">隐藏第三列</el-button>
    <el-button @click="showColumn" v-if="listConfig.columns[2].hidden">显示第三列</el-button>
    <cry-table
      :listConfig="listConfig"
      :listData="listData"
      :border="true"
      @row-save="rowSave"
      @testButtonMethod1="testButtonMethod1"
      @changeProvince="changeProvince"
    />
  </div>
</template>

<script>
import pcDict from '../data/pc-code.json'

export default {
  data() {
    return {
      pcDict,
      cityDict: [],
      options: { border: false },
      listData: [],
      listConfig: {
        hiddenIndex: false,
        operateType: 1,
        confirmBeforRemove: false,
        multi: true,
        columns: [
          { prop: 'country', label: '国家' },
          {
            prop: 'province',
            label: '省份',
            type: 'select',
            options: pcDict,
            valueKey: 'code',
            labelKey: 'name',
            changeMethod: 'changeProvince'
          },
          {
            prop: 'city',
            label: '城市',
            type: 'select',
            optionsKey: 'cityDict',
            valueKey: 'code',
            labelKey: 'name'
          },
          {
            prop: 'year',
            label: '年份',
            type: 'year'
          },
          {
            prop: 'month',
            label: '月份',
            type: 'month'
          },
          {
            prop: 'population',
            label: '人口',
            type: 'input-number'
          },
          {
            prop: 'memo',
            label: '备注',
            type: 'input'
          },
          {
            label: '自定义按钮',
            type: 'button',
            width: '220px',
            options: [
              { buttonName: '按钮1', methodName: 'testButtonMethod1', hiddenKey: 'hk1' },
              { buttonName: '按钮2', methodName: 'testButtonMethod2', hiddenKey: 'hk2', type: 'warning' },
              { buttonName: '按钮3', type: 'text' }
            ]
          }
        ]
      }
    }
  },
  created() {
    this.listData = [
      {
        country: '中国',
        edit: false,
        population: 1000,
        province: '11',
        city: '110101',
        year: '2019',
        month: '01',
        memo: 'test'
      },
      {
        country: '中国',
        edit: false,
        population: 900,
        hk2: true,
        province: '44',
        city: '4401',
        year: '2018',
        month: '02',
        memo: 'test2'
      },
      {
        country: '中国',
        edit: false,
        population: 890,
        province: '44',
        city: '4415',
        year: '2017',
        month: '03',
        memo: 'test3'
      }
    ]
    this.listData.forEach(v => {
      v.cityDict = this.pcDict.find(v2 => v2.code === v.province).children
    })
  },
  methods: {
    async changeProvince(row, rowIndex) {
      row.cityDict = this.pcDict.find(v => v.code === row.province).children
      row.city = null
    },
    addRow() {
      this.listData.push({ country: '中国', edit: true })
    },
    hiddenKeyColumn() {
      this.$set(this.listConfig.columns[2], 'hidden', true)
    },
    showColumn() {
      this.$set(this.listConfig.columns[2], 'hidden', false)
    },
    testButtonMethod1(row, rowIndex) {
      row.hk2 = !row.hk2
    },
    rowSave(row, rowIndex) {}
  }
}
</script>