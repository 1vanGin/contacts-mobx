import { makeAutoObservable } from "mobx";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { ContactDto } from "src/types/dto/ContactDto";

interface IFavoriteStore {
  favorite: FavoriteContactsDto;
  addToFavorite: (id: ContactDto["id"]) => void;
  deleteFromFavorite: (id: ContactDto["id"]) => void;
}

export const favoriteStore = makeAutoObservable<IFavoriteStore>({
  favorite: [],
  addToFavorite(id) {
    this.favorite.push(id);
  },
  deleteFromFavorite(id) {
    const index = this.favorite.findIndex((f) => f === id);
    this.favorite.splice(index, 1);
  },
});
