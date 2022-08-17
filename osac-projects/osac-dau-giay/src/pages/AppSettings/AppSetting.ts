export class AppSetting {
  settingId: string

  static pathDatas = ['appSetting', 'datas']
  static pathDeleted = ['appSetting', 'deleted']

  constructor(settingId: string) {
    this.settingId = settingId
  }

  getPathDatas(id?: any) {
    if (id) {
      return [...AppSetting.pathDatas, this.settingId, id]
    }

    return [...AppSetting.pathDatas, this.settingId]
  }

  getPathDeleted() {
    return [...AppSetting.pathDeleted, this.settingId]
  }
}
