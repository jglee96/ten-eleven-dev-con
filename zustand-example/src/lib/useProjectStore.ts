import { create } from 'zustand';

export interface Project {
  name: string;
  project_id: number;
  building_type: string;
  building_shape_type: string;
  road_list: number[];
}

interface State {
  project: Project;
  actions: Action;
}

interface Action {
  addRoad: () => void;
  popRoad: () => void;
}

const initialState: Omit<State, 'actions'> = {
  project: {
    name: 'State Management Project',
    project_id: 1234,
    building_type: '아파트',
    building_shape_type: 'Linear',
    road_list: [1, 2, 3, 4, 5],
  },
};

export const useProjectStore = create<State>((set, get) => ({
  ...initialState,
  actions: {
    addRoad: () => {
      const prevRoad = get().project.road_list;
      set((state) => ({
        project: {
          ...state.project,
          road_list: [...prevRoad, prevRoad.length + 1],
        },
      }));
    },
    popRoad: () => {
      set((state) => ({
        project: {
          ...state.project,
          road_list: [...state.project.road_list.slice(0, -1)],
        },
      }));
    },
  },
}));

export const useProjectActions = (): Action =>
  useProjectStore((state) => state.actions);
