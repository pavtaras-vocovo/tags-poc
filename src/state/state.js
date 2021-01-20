export const initState = {
  selectedGroupId: 'group_id',
  groups: {
    group_id: {
      id: 'group_id',
      children: [],
      title: 'Top group',
      parent_id: null, // for non-top group it is id of the parent group
      controllers: ['controller_id'],
    },
  },
  controllers: {
    controller_id: {
      id: 'controller_id',
      title: 'Controller title',
      group_id: 'group_id',
      tags: [
        {
          title: 'tag1',
          controller_id: 'controller_id',
          group_id: 'group_id',
        },
      ],
    },
  },
}
