export const initState = {
  selectedGroupId: 'group_id',
  groups: {
    group_id: {
      id: 'group_id',
      children: [],
      title: 'Top group',
      parent_id: null, // for non-top group it is id of the parent group
      controllers: [],
    },
  },
  controllers: {},
}
