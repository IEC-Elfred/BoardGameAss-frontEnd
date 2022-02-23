const IdentityArray = [{
    id: 0,
    imageURL: "/static/werewolf/guard-withfont.png",
    desc: "每天晚上可以守护包括自己在内的任意一名存活角色。守护的玩家不能被狼人杀害。守卫不能连续两晚守护同一名角色。守卫可以放弃守护。若女巫的解药和守卫的守护指定了同一人，同守同救导致效果抵消，该玩家仍会死亡"
  },
  {
    id: 1,
    imageURL: "/static/werewolf/cupid-withfont.png",
    desc: '在第一天晚上可以把两个人设为情侣（可以将自己设为情侣之一），这两人若是其中一人死去，另一个也要跟着殉情。当情侣均为好人时丘比特为好人阵营，获胜条件为好人获胜。当情侣均为狼人时丘比特为狼人阵营，获胜条件为狼人获胜。当情侣为1好人1狼人时，丘比特与情侣形成第三方阵营，需除掉其余所有玩家方可胜利'
  },
  {
    id: 2,
    imageURL: "/static/werewolf/hunter-withfont.png",
    desc: '被投票放逐或被狼人杀死后可以选择发动技能带走在场任意一位存活玩家（也可以选择不发动技能），当猎人被女巫毒药毒死时白天不能发动技能'
  },
  {
    id: 3,
    imageURL: "/static/werewolf/idiot-withfont.png",
    desc: '白天被投票放逐之后不会出局，而是发动被动技能后并继续游戏'
  },
  {
    id: 4,
    imageURL: "/static/werewolf/prophet-withfont.png",
    desc: "天黑时拥有行动阶段，可以查验一个存活玩家的身份，不会显示具体身份，只会显示是否为狼人"
  },
  {
    id: 5,
    imageURL: "/static/werewolf/succubus-withfont.png",
    desc: "在狼人睁眼时，和狼人一起睁眼杀人。第一天和狼人共同杀人后，魅魔单独睁眼选择一名好人阵营玩家作为自己的情侣。每晚狼人杀人后，情侣都可睁眼，进行手势交流。情侣中一人死去，则另一人殉情。情侣杀死其它所有人，则胜利"
  },
  {
    id: 6,
    imageURL: "/static/werewolf/villager-withfont.png",
    desc: "没有任何特殊能力，天黑的时候闭着眼睛"
  },
  {
    id: 7,
    imageURL: "/static/werewolf/witch-withfont.png",
    desc: '天黑时拥有行动阶段，初始拥有一瓶解药和一瓶毒药。拥有解药时可以查看当晚被狼人攻击的目标，使用解药可以救活目标，毒药可以出局一人（不能发动技能，也没有遗言）。女巫没有解药时不能查看被攻击的目标。女巫两瓶药一晚不能同时使用。若女巫的解药和守卫的守护指定了同一人，同守同救导致效果抵消，该玩家仍会死亡'
  },
  {
    id: 8,
    imageURL: "/static/werewolf/wolf-white-withfont.png",
    desc: "天黑时拥有行动阶段，通过协商后确定任意一个存活玩家进行攻击。白天可以随时发动自爆，自爆后直接进入黑夜"
  },
  {
    id: 9,
    imageURL: "/static/werewolf/wolfbeauty-withfont.png",
    desc: "狼美人每天晚上参与狼队杀人游戏后，可单独魅惑一名好人阵营的玩家。狼美人死亡时，当晚被魅惑的玩家随之殉情。狼美人不能自爆或自刀。"
  },
  {
    id: 10,
    imageURL: "/static/werewolf/wolfking-withfont.png",
    desc: "白天的时候可以随时发动技能自爆，自己死亡并带走任意一名其他玩家，之后直接进入黑夜"
  },
  {
    id: 11,
    imageURL: "/static/werewolf/knight-withfont.png",
    desc: "骑士可以在白天投票前的任何时候翻出底牌，并指定一名玩家，由主持人宣布，该玩家是否是狼人。若是狼人，则此玩家立即死亡，白天结束，马上进入晚上。如果不是，则骑士以死谢罪，当天的投票继续。该技能在游戏中只能发动一次"
  }
]

const GameRule = "狼人杀是一款多人参与的，以语言描述推动的、较量口才和分析判断能力的策略类桌游"

const WinConditionTitle = "胜利标准"

const WinCondition = [{
  id : 0,
  class: "好人阵营",
  desc: "杀死或放逐所有狼人取得胜利"
},
{
  id : 1,
  class : "狼人阵营",
  desc: "隐匿于好人中间，靠消灭好人方所有神职或者所有村民取得胜利"
}]

const GoodMan = "好人阵营"

const BadGuy = "坏人阵营"

export {
  IdentityArray
}