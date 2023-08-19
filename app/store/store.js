import {create} from 'zustand';

const useStore = create((set) => ({
  // Define your fields and initial values here
  counter: 0,
  username: '',
  
  // Define actions to update the state
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  setUsername: (newUsername) => set({ username: newUsername }),
}));

export default useStore;