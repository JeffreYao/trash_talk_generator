// 預設幹話集
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

// 幹話產生器
function trashTalkGenerator(info) {
  // 取出職業類別
  let job = task[Object.keys(info)]
  console.log('job', job)
  // 製作task & phrase 隨機數字
  let randomIndexTask = ''
  let randomIndexPhrase = ''

  // 判斷前端頁面是否有選職業
  if (job !== undefined) {
    randomIndexTask = Math.floor(Math.random() * job.length)
    randomIndexPhrase = Math.floor(Math.random() * phrase.length)
  }
  let trashTalk = ''
  // 產生各職業對應幹話
  if (info.engineer === 'on') {
    trashTalk = `身為一個工程師${task.engineer[randomIndexTask]},${phrase[randomIndexPhrase]}吧`
  } if (info.designer === 'on') {
    trashTalk = `身為一個設計師${task.designer[randomIndexTask]},${phrase[randomIndexPhrase]}吧`
  } if (info.entrepreneur === 'on') {
    trashTalk = `身為一個創業家${task.entrepreneur[randomIndexTask]},${phrase[randomIndexPhrase]}吧`
  } if (job === undefined) {
    trashTalk = '請選擇職業'
  }
  return trashTalk
}

module.exports = trashTalkGenerator