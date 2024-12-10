import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardStatus = "active" | "inactive" | "terminated";
export type CardType = "physical" | "digital";

export interface Card {
  id: string;
  last_four: string;
  status: CardStatus;
  is_physical: boolean;
}

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    { id: "1", last_four: "1234", is_physical: false, status: "active" },
    { id: "2", last_four: "5678", is_physical: false, status: "inactive" },
    { id: "3", last_four: "9101", is_physical: true, status: "terminated" },
    { id: "4", last_four: "1121", is_physical: false, status: "terminated" },
    { id: "5", last_four: "3141", is_physical: true, status: "inactive" },
    { id: "6", last_four: "2232", is_physical: true, status: "active" },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    filterCardsByStatus(state, action: PayloadAction<CardStatus | null>) {
      if (!action.payload) {
        state.cards = [...initialState.cards];
      } else {
        state.cards = initialState.cards.filter(
          (card) => card.status === action.payload
        );
      }
    },
    filterCardByType(state, action: PayloadAction<CardType | null>) {
      if (!action.payload) {
        state.cards = [...initialState.cards];
      } else {
        const isPhysical = action.payload === "physical";
        state.cards = initialState.cards.filter(
          (card) => card.is_physical === isPhysical
        );
      }
    },
  },
});

export const { filterCardsByStatus, filterCardByType } = cardsSlice.actions;

export default cardsSlice.reducer;
