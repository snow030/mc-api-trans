ArgId=>{
    //六个朝向
    Direction = {
        down: 'down',
        east: 'east',
        north: 'north',
        south: 'south',
        up: 'up',
        west: 'west'
    };
    //计分板位置
    DisplaySlotId = {
        belowname: 'belowname',
        list: 'list',
        sidebar: 'sidebar'
    };
    //伤害类型
    EntityDamageCause = {
        anvil: 'anvil',
        blockExplosion: 'blockExplosion',
        charging: 'charging',
        contact: 'contact',
        drowning: 'drowning',
        entityAttack: 'entityAttack',
        entityExplosion: 'entityExplosion',
        fall: 'fall',
        fallingBlock: 'fallingBlock',
        fire: 'fire',
        fireTick: 'fireTick',
        fireworks: 'fireworks',
        flyIntoWall: 'flyIntoWall',
        freezing: 'freezing',
        lava: 'lava',
        lightning: 'lightning',
        magic: 'magic',
        magma: 'magma',
        none: 'none',
        override: 'override',
        piston: 'piston',
        projectile: 'projectile',
        stalactite: 'stalactite',
        stalagmite: 'stalagmite',
        starve: 'starve',
        suffocation: 'suffocation',
        suicide: 'suicide',
        temperature: 'temperature',
        thorns: 'thorns',
        'void': 'void',
        wither: 'wither'
    };
    //炼药锅中的液体类型
    FluidType = {
        lava: 'lava',
        potion: 'potion',
        powderSnow: 'powderSnow',
        water: 'water'
    };
    //游戏模式
    GameMode = {
        adventure: 'adventure',
        creative: 'creative',
        spectator: 'spectator',
        survival: 'survival'
    };
    //信息来源
    MessageSourceType = {
        clientScript: 'clientScript',
        commandBlock: 'commandBlock',
        dialogueCommand: 'dialogueCommand',
        entityCommand: 'entityCommand',
        serverCommand: 'serverCommand',
        serverScript: 'serverScript'
    };
    //目标列表排序？？
    ObjectiveSortOrder = {
        ascending: 0,//升序
        descending: 1//降序
    };
    //记分项目标类型
    ScoreboardIdentityType = {
        entity: 'entity',
        fakePlayer: 'fakePlayer',
        player: 'player'
    };
    //每个时段对应的时间
    TimeOfDay = {
        Day: 1000,
        Noon: 6000,
        Sunset: 12000,
        Night: 13000,
        Midnight: 18000,
        Sunrise: 23000
    };
    //终止脚本执行的原因
    WatchdogTerminateReason = {
        hang: 'hang',//当掉 or 无限loop
        stackOverflow: 'stackOverflow'//执行任务太长
    };
};

Class=>{
    //一个事件，玩家输入消息时触发
    BeforeChatEvent = {
        //是否拦截消息
        cancle: boolean,
        //输入的消息
        message: string,
        //发送的玩家
        sender: Player,
        //是否让其他玩家看见
        sendToTargets: boolean,
        //让哪些玩家看见
        targets: [Player]
    };
    //输入消息监听器
    BeforeChatEventSignal = {
        //添加一个输入消息时要触发的回调函数
        subscribe: function( callback = ()=>{} ){
            callback(BeforeChatEvent);
        },
        //删除回调函数
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeChatEvent);
        }
    };
    //导致数据驱动的实体事件
    BeforeDataDrivenEntityTriggerEvent = {
        //该实体事件是否会被触发
        cancle: boolean,
        //触发的实体-readonly
        entity: Entity,
        //被触发的数据的名称-readonly
        id: string,
        //受影响的组件状态的列表
        modifiers: [DefinitionModifier]
    };
    //实体事件监听器
    BeforeDataDrivenEntityTriggerEventSignal = {
        //监听实体事件-option可选
        subscribe: function( callback = ()=>{}, option = {EntityDataDrivenTriggerEventOptions} ){
            callback(BeforeDataDrivenEntityTriggerEvent);
        },
        //取消监听实体事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeDataDrivenEntityTriggerEvent);
        }
    };
    //爆炸事件
    BeforeExplosionEvent = {
        //是否拦截爆炸事件
        cancle: bollean,
        //发生爆炸的维度-readonly
        demension: Demension,
        //受波及的方块
        impactedBlocks: [BlockLocation],
        //爆炸源-readonly
        source: Entity
    };
    //爆炸监听器
    BeforeExplosionEventSignal = {
        //监听爆炸事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeExplosionEvent);
        },
        //取消监听爆炸事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeExplosionEvent);
        }
    };
    //导致组件修改的物品事件
    BeforeItemDefinitionTriggeredEvent = {
        //是否拦截修改事件
        cancle: bollean,
        //触发修改的事件名称-readonly
        eventName: string,
        //受影响的物品槽位
        item: ItemStack,
        //触发物品事件的实体-readonly
        source: Entity,
    };
    //物品事件监听器
    BeforeItemDefinitionEventSignal = {
        //监听物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemDefinitionTriggeredEvent);
        },
        //取消监听物品事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeItemDefinitionTriggeredEvent);
        }
    };
    //使用物品事件
    BeforeItemUseEvent = {
        //是否拦截使用事件
        cancle: boolean,
        //使用的物品槽位
        item: ItemStack,
        //使用物品的实体-readonly
        source: Entity,
    };
    //使用物品监听器
    BeforeItemUseEventSignal = {
        //监听使用物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseEvent);
        },
        //取消监听使用物品事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseEvent);
        }
    };
    //对方块使用物品事件
    BeforeItemUseOnEvent = {
        //对着方块的哪个方向使用-readonly
        blockFace: Direction,
        //方块坐标-readonly
        blockLocation: BlockLocation,
        //是否拦截使用事件
        cancle: boolean,
        //对着方块的面的什么位置(x轴)-readonly
        faceLocationX: number,
        //对着方块的面的什么位置(y轴)-readonly
        faceLocationY: number,
        //使用的物品槽位
        item: ItemStack,
        //使用物品的实体-readonly
        source: Entity,
    };
    //对方块使用物品监听器
    BeforeItemUseOnEventSignal = {
        //监听对方块使用物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseOnEvent);
        },
        //取消监听对方块使用物品事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseOnEvent);
        }
    };
    //活塞推动/拉回事件
    BeforePistonActivateEvent = {
        //要推动/拉回的活塞-readonly
        block: Block,
        //是否阻止推动/拉回事件的发生
        cancle: boolean,
        //活塞的维度-readonly
        demension: Demension,
        //推动(true)还是拉回(false)-readonly
        isExpanding: boolean,
        //关于活塞的其他信息-readonly
        piston: BlockPistonComponent
    };
    //活塞推动/拉回监听器
    BeforePistonActivateEventSignal = {
        //监听活塞移动事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforePistonActivateEvent);
        },
        //取消监听活塞移动事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforePistonActivateEvent);
        }
    };
    //脚本终止事件
    BeforeWatchdogTerminateEvent = {
        //是否拦截报错
        cancle: boolean,
        //报错原因-readonly
        terminateReason: WatchdogTerminateReason
    };
    //脚本终止监听器
    BeforeWatchdogTerminateEventSignal = {
        //监听脚本终止事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeWatchdogTerminateEvent);
        },
        //取消监脚本终止事件
        unsubscribe: function( callback = ()=>{} ){
            callback(BeforeWatchdogTerminateEvent);
        }
    };
    //来源于方块的事件
    BlockEvent = {
    };
};