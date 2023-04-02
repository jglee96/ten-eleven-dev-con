import { atom, selectorFamily } from 'recoil';
import { Project } from './recoil-example';

export const projectAtom = atom<Project>({
  key: 'projectAtom',
  default: {
    name: 'State Management Project',
    project_id: 1234,
    building_type: '아파트',
    building_shape_type: 'Linear',
    road_list: [1, 2, 3, 4, 5],
  },
});

export const withProject = selectorFamily({
  key: 'withProject',
  get:
    (property: keyof Project) =>
    ({ get }) => {
      const project = get(projectAtom);
      return project[property];
    },
});
