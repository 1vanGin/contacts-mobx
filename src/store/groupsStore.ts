import { makeAutoObservable } from "mobx";
import { DATA_GROUP_CONTACT } from "src/__data__";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

interface IGroupsStore {
  groups: GroupContactsDto[];
}

export const groupsStore = makeAutoObservable<IGroupsStore>({
  groups: DATA_GROUP_CONTACT,
});
