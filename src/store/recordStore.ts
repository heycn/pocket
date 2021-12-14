import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
let data: RecordItem[] | undefined = undefined;

const recordStore = {
  recordList: data,
  fetchRecords() {
    data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return data;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    recordStore.saveRecord();
  }
};

recordStore.fetchRecords();

export default recordStore;
