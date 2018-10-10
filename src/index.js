import DatepickerGroup from './components/datepicker-group/index'
import TagSelect from './components/tag-select/index'
import TreeTable from './components/tree-table/index'
import CollapseCheckbox from './components/collapse-checkbox/index'
import TagCustom from './components/tag-custom/index'
// assets
import CascaderThirdExpand from './components/cascader/CascaderThirdExpand'
import CascaderCollapse from './components/cascader/CascaderCollapse'
import CollpasePanel from './components/collpase-panel/index'
import CollpasePanelDim from './components/collpase-panel-dim/index'
import ConditionSelect from './components/condition-select/index'
import PageBreadcrumb from './components/page-breadcrumb/index'

const components = [
  DatepickerGroup,
  TagSelect,
  TreeTable,
  CollapseCheckbox,
  TagCustom,
  // assets
  CascaderThirdExpand,
  CascaderCollapse,
  CollpasePanel,
  CollpasePanelDim,
  ConditionSelect,
  PageBreadcrumb
]

function install(Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  DatepickerGroup,
  TagSelect,
  TreeTable,
  CollapseCheckbox
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
