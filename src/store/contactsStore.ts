import {makeAutoObservable} from "mobx";
import {DATA_CONTACT} from "src/__data__";
import {ContactDto} from "src/types/dto/ContactDto";

interface IContactsStore {
    contacts: ContactDto[]
}

export const contactsStore = makeAutoObservable<IContactsStore>({
    contacts: DATA_CONTACT
})