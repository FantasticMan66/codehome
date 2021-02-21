// import { DeleteOutlined } from '@ant-design/icons';
// console.log(DeleteOutlined);
export const library = [
  { name: "人脸库233333333fffrrrrrrrrrrrr2", groupid: 1 },
  { name: "人脸库3", groupid: 2 },
  { name: "人脸库3", groupid: 3 },
  { name: "人脸库4", groupid: 4 },
  { name: "人脸库5", groupid: 5 },
  { name: "人脸库6", groupid: 6 },
  { name: "人脸库7", groupid: 7 },
  { name: "人脸库8", groupid: 8 },
  { name: "人脸库9", groupid: 9 },
  { name: "人脸库10", groupid: 10 },
  { name: "人脸库11", groupid: 11 },
  { name: "人脸库12", groupid: 12 },
];

export const Device = [
  {
    type: "ipc",
    name: "第1个IPC",
    channelID: 1,
  },
  {
    type: "NVR",
    name: "第1个NVR",
    child: [
      {
        type: "ipc",
        name: "第2个IPC1111111111111111111fffffff",
        channelID: 2,
      },
      {
        type: "ipc",
        name: "第3个IPC",
        channelID: 3,
      },
      {
        type: "ipc",
        name: "第4个IPC",
        channelID: 4,
      },
      {
        type: "ipc",
        name: "第5个IPC",
        channelID: 5,
      },
    ],
  },
  {
    type: "NVR",
    name: "第2个NVR",
    child: [
      {
        type: "ipc",
        name: "第6个IPC",
        channelID: 6,
      },
      {
        type: "ipc",
        name: "第7个IPC",
        channelID: 7,
      },
      {
        type: "ipc",
        name: "第8个IPC",
        channelID: 8,
      },
      {
        type: "ipc",
        name: "第9个IPC",
        channelID: 9,
      },
    ],
  },
  {
    type: "NVR",
    name: "第3个NVR",
    child: [
      {
        type: "ipc",
        name: "第10个IPC",
        channelID: 10,
      },
      {
        type: "ipc",
        name: "第11个IPC",
        channelID: 11,
      },
      {
        type: "ipc",
        name: "第12个IPC",
        channelID: 12,
      },
      {
        type: "ipc",
        name: "第13个IPC",
        channelID: 13,
      },
    ],
  },
];



export const dataSource = [
  {
    key: "1",
    name: "胡彦斌ww胡彦斌胡彦斌胡彦斌胡彦斌wwwwwwwwwwwwwwwwwwwww",
    similar: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    similar: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "3",
    name: "胡彦斌",
    similar: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "4",
    name: "胡彦祖",
    similar: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "5",
    name: "胡彦斌",
    similar: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "6",
    name: "胡彦祖",
    similar: 42,
    address: "西湖区湖底公园1号",
  },
];

export const contact = [
  {
    groupid: 1,
    control: [
      {
        channelID: 1,
        similar: 50,
      },
      {
        channelID: 2,
        similar: 50,
      },
    ],
  },
  {
    groupid: 2,
    control: [
      {
        channelID: 1,
        similar: 80,
      },
      {
        channelID: 2,
        similar: 80,
      },
    ],
  },
];

export function getTableData(contactdata, id) {
  let contact = contactdata || [],
    data = [],
    control;
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].groupid === id) {
      control = contact[i].control || [];
      control.forEach((element) => {
        data.push({
          key: "channel" + element.channelID,
          name: element.channelID,
          similar: element.similar,
        });
      });
      break;
    }
  }
  return data;
}

export function getTreeSelected(contactdata, id) {
  let contact = contactdata || [],
    data = [],
    control;
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].groupid === id) {
      control = contact[i].control || [];
      control.forEach((element) => {
        data.push("#S" + element.channelID);
      });
      break;
    }
  }

  return data;
}
