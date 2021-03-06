interface IList {
    title: string,
    _id: string,
    items: IItem[],
    owner: string,
}

interface IGroup {
    _id: string,
    name: string,
    users: string[]
}

interface IItem {
    _id?: string,
    name: string,
    desc: string,
    url: string,
    store: string,
    taken: string
}

interface IUser {
    _id: string,
    email: string,
    groups: IGroup[],
    lists: IList[],
    nameFirst: string,
    nameLast: string,
    invites: IInvite[],
}

interface IInvitee {
    _id: string,
    email: string
}

interface IInvite {
    _id: string,
    name: string,
    owner: string
}