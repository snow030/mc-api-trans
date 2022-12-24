Enum => {
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
Class => {
    //一个事件，玩家输入消息时触发（将要发生）
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
    //（将要发生）输入消息监听器
    BeforeChatEventSignal = {
        //添加一个输入消息时要触发的回调函数
        subscribe: function( callback = ()=>{} ){
            callback(BeforeChatEvent);
            return callback;
        },
        //删除回调函数
        unsubscribe: function( callback = ()=>{} ){}
    };
    //导致数据驱动的实体事件（将要发生）
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
    //（将要发生）实体事件监听器
    BeforeDataDrivenEntityTriggerEventSignal = {
        /*监听实体事件-option可选
        *     option - 监听哪些实体/哪些事件（event），不写表示全部监听
        */
        subscribe: function( callback = ()=>{}, option = {EntityDataDrivenTriggerEventOptions} ){
            callback(BeforeDataDrivenEntityTriggerEvent);
            return callback;
        },
        //取消监听实体事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //爆炸事件（将要发生）
    BeforeExplosionEvent = {
        //是否拦截爆炸事件
        cancle: bollean,
        //发生爆炸的维度-readonly
        dimension: Dimension,
        //受波及的方块
        impactedBlocks: [BlockLocation],
        //爆炸源-readonly
        source: Entity
    };
    //（将要发生）爆炸监听器
    BeforeExplosionEventSignal = {
        //监听爆炸事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeExplosionEvent);
            return callback;
        },
        //取消监听爆炸事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //导致组件修改的物品事件（将要发生）
    BeforeItemDefinitionTriggeredEvent = {
        //是否拦截修改事件
        cancle: bollean,
        //触发修改的事件名称-readonly
        eventName: string,
        //受影响的一组物品
        item: ItemStack,
        //触发物品事件的实体-readonly
        source: Entity,
    };
    //（将要发生）物品事件监听器
    BeforeItemDefinitionEventSignal = {
        //监听物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemDefinitionTriggeredEvent);
            return callback;
        },
        //取消监听物品事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //使用物品事件（将要发生）
    BeforeItemUseEvent = {
        //是否拦截使用事件
        cancle: boolean,
        //使用的一组物品
        item: ItemStack,
        //使用物品的实体-readonly
        source: Entity,
    };
    //（将要发生）使用物品监听器
    BeforeItemUseEventSignal = {
        //监听使用物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseEvent);
            return callback;
        },
        //取消监听使用物品事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //对方块使用物品事件（将要发生）
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
        //使用的一组物品
        item: ItemStack,
        //使用物品的实体-readonly
        source: Entity,
    };
    //（将要发生）对方块使用物品监听器
    BeforeItemUseOnEventSignal = {
        //监听对方块使用物品事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeItemUseOnEvent);
            return callback;
        },
        //取消监听对方块使用物品事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //活塞推动/拉回事件（将要发生）
    BeforePistonActivateEvent = {
        //要推动/拉回的活塞-readonly
        block: Block,
        //是否阻止推动/拉回事件的发生
        cancle: boolean,
        //活塞的维度-readonly
        dimension: Dimension,
        //推动中-readonly
        isExpanding: boolean,
        //关于活塞的其他信息-readonly
        piston: BlockPistonComponent
    };
    //（将要发生）活塞推动/拉回监听器
    BeforePistonActivateEventSignal = {
        //监听活塞移动事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforePistonActivateEvent);
            return callback;
        },
        //取消监听活塞移动事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //脚本终止事件（将要发生）
    BeforeWatchdogTerminateEvent = {
        //是否拦截报错
        cancle: boolean,
        //报错原因-readonly
        terminateReason: WatchdogTerminateReason
    };
    //（将要发生）脚本终止监听器
    BeforeWatchdogTerminateEventSignal = {
        //监听脚本终止事件
        subscribe: function( callback = ()=>{} ){
            callback(BeforeWatchdogTerminateEvent);
            return callback;
        },
        //取消监听脚本终止事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //一格实际存在的方块
    Block = {
        //方块所在的维度-readonly
        dimension: Dimension,
        //方块是否含水
        isWaterlogged: boolean,
        //方块所在位置（坐标）-readonly
        location: BlockLocation,
        //方块属性集（虚构的方块）-readonly
        permutation: BlockPermutation,
        //方块类型（类似setblock命令需要的“方块”）-readonly
        type: BlockType,
        //方块坐标-readonly
        x: number,
        y: number,
        z: number,
        /*查看某虚构方块能不能放在这格方块旁-faceToPlaceOn可选
        *     blockToPlace - 要放置的虚构方块
        *     faceToPlaceOn - 放在哪个方向，不写表示任意方向
        */
        canPlace: function( blockToPlace = BlockPermutation || BlockType , faceToPlaceOn = Direction ){
            return boolean;
        },
        //返回该方块的某个组件（component）
        getComponent: function( componentName = string){},
        //返回红石充能值
        getRedstonePower: function(){},
        //获取方块标签列表
        getTags: function(){ return [string] },
        //查找方块标签
        hasTags: function( tag = string ){ return boolean },
        //设置这格是什么方块（虚构方块）
        setPermutation: function( permutation = BlockPermutation ){},
        //设置这格的方块类型（类似setblock）
        setType: function( type = BlockType ){},
        //查看这里能不能放置某个虚构方块
        trySetPermutation: function( permutation = BlockPermutation ){ return boolean }
    };
    //定义矩形区域
    BlockAreaSize( x = number, y = number, z = number );
    //矩形的方块区域（类似structure框选区域）
    BlockAreaSize = {
        //边长
        x: number,//宽
        y: number,//高
        z: number,//长
        //和其他矩形区域大小相同吗
        equals: function( other = BlockAreaSize ){ return boolean }
    };
    //玩家破坏方块事件
    BlockBreakEvent = {
        //发生事件的那格方块（实际存在的方块），可能是空气可能是方块-readonly
        block: Block,
        //破坏前的方块（虚构方块）-readonly
        brokenBlockPermutation: BlockPermutation,
        //所在维度-readonly
        dimension: Dimension,
        //破坏方块的玩家-readonly
        player: Player
    };
    //方块破坏监听器
    BlockBreakEventSignal = {
        //监听方块破坏事件
        subscribe: function( callback = ()=>{} ){
            callback(BlockBreakEvent);
            return callback;
        },
        //取消监听方块破坏事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //？？？
    BlockComponent
    //方块事件
    BlockEvent = {
        //发生事件的方块（实际存在的方块）-readonly
        block: Block,
        //所在维度-readonly
        dimension: Dimension
    };
    //方块爆炸事件
    BlockExplodeEvent = {
        //爆炸的那格方块（实际存在的方块）-readonly
        block: Block,
        //所在维度-readonly
        dimension: Dimension,
        //导致爆炸的实体-readonly
        source: Entity
    };
    BlockExplodeEventSignal = {
        //监听方块爆炸事件
        subscribe: function( callback = ()=>{} ){
            callback(BlockExplodeEvent);
            return callback;
        },
        //取消监听方块爆炸事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //方块被打击的信息
    BlockHitInformation = {
        //被打击的那格方块（实际存在的方块）-readonly
        block: Block,
        //被打击的方向-readonly
        face: Direction,
        //被打击的面的什么位置(x轴)-readonly
        faceLocationX: number,
        //被打击的面的什么位置(y轴)-readonly
        faceLocationY: number,
    };
    //方块物品栏组件（component）
    BlockInventoryComponent = {
        //获得方块的容器和内容-readonly
        container: BlockInventoryComponentContainer,
        //容器坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:inventory",
        componentId: "minecraft:inventory"
    };
    //方块的物品栏，一个物品容器
    BlockInventoryComponentContainer = {
        //空槽数量-readonly
        emptySlotsCount: number,
        //有几格槽位（容量）-readonly
        size: number,
        //添加物品，类似give
        addItem: function( itemStack = ItemStack ){},
        //清空容器
        clearAll: function(){},
        //清空某格槽位，类似replaceitem空气
        clearItem: function( slot = number ){},
        //获取某格槽位的一组物品
        getItem: function( slot = number ){ return ItemStack },
        //获取某格槽位
        getSlot: function( slot = number ){ return ContainerSlot },
        /*把某格槽位设置为一组物品，类似replaceitem-itemStack可选
        *     itemStack - 填入的一组物品，不写表示空气
        */
        setItem: function( slot = number, itemStack = ItemStack ){},
        /*互换某格槽位的物品
        *     slot - 当前容器的哪格槽位
        *     otherSlot - 跟哪格槽位互换（另一个容器的）
        *     otherContainer - 跟哪个容器互换
        */
        swapItems: function( slot = number, otherSlot = number, otherContainer = Container ){
            return boolean;
        },
        /*移动某格槽位的物品
        *     fromSlot - 移动哪格槽位的物品
        *     toSlot - 到哪格槽位（另一个容器的）
        *     toContainer - 到哪个容器
        */
        transferItem: function( fromSlot = number, toSlot = number, toContainer = Container ){
            return boolean;
        }
    };
    //盛装岩浆组件（component）
    BlockLavaContainerComponent = {
        //盛装的量（0~6）
        fillLevel: number,
        //容器坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:lavaContainer",
        componentId: "minecraft:lavaContainer"
    };
    //定义方块坐标
    BlockLocation( x = number, y = number, z = number );
    //方块坐标
    BlockLocation = {
        //坐标
        x: number,
        y: number,
        z: number,
        //往上一格的位置
        above: function(){ return BlockLocation },
        //这里到那里之间的所有位置，类似fill框选区域
        blocksBetween: function( other = BlockLocation ){ return [BlockLocation] },
        //两个方块坐标一样吗（只对比坐标）
        equals: function( other = BlockLocation ){ return boolean },
        //增减坐标（BlockLocation.offset(0,0,0)保持不变）
        offset: function( x = number, y = number, z = number ){
            return BlockLocation;
        }
    };
    //虚构方块
    BlockPermutation = {
        //方块类型-readonly
        type: BlockType,
        //复制一份虚构方块
        clone: function(){ return BlockPermutation },
        //获取所有方块属性
        getAllProperties: function(){ return [IBlockProperty] },
        //获取某个方块属性
        getProperty: function( propertyName = string ){ return IBlockProperty },
        //获取方块标签列表
        getTags: function(){ return [string] },
        //查找方块标签
        hasTags: function( tag = string ){ return boolean }
    };
    //活塞臂杆组件
    BlockPistonComponent = {
        //被推动/拉回的方块（坐标）-readonly
        attachedBlocks: [BlockLocation],
        //是否完全推出-readonly
        isExpanded: boolean,
        //推动中-readonly
        isExpanding: boolean,
        //推动/拉回中-readonly
        isMoving: boolean,
        //是否完全拉回-readonly
        isRetracted: boolean,
        //拉回中-readonly
        isRetracting: boolean,
        //活塞臂杆坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:piston",
        componentId: "minecraft:piston"
    };
    //放置方块事件
    BlockPlaceEvent = {
        //被放置的那格方块（实际存在的方块）-readonly
        block: Block,
        //所在维度-readonly
        dimension: Dimension,
        //放置的玩家-readonly
        player: Player
    };
    //放置方块监听器
    BlockPlaceEventSignal = {
        //监听放置方块事件
        subscribe: function( callback = ()=>{} ){
            callback(BlockPlaceEvent);
            return callback;
        },
        //取消监听放置方块事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //盛装药液组件
    BlockPotionContainerComponent = {
        //盛装的量（0~6）
        fillLevel: number,
        //容器坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:potionContainer",
        componentId: "minecraft:potionContainer",
        /*设置药液效果
        *     item - 必须是一瓶药水
        */
        setPotionType: function( item = ItemStack ){}
    };
    //所有方块属性列表
    BlockProperties = {
        active: "active",//幽匿尖啸体 - 是否激活 - 0|1
        age: "age",//仙人掌|紫颂花|可可果|火|冰霜|下界疣|红树胎生苗|甘蔗 - 年龄 - 0~25
        ageBit: "age_bit",//竹子|竹笋|树苗 - 生长阶段 - true|false
        allowUnderwaterBit: "allow_underwater_bit",//TNT - 是水下TNT吗 - true|false
        attachedBit: "attached_bit",//线|绊线钩 - 是否连接 - true|false
        attachment: "attachment",//钟|砂轮 - 附着方式 - hanging|multiple|side|standing
        bambooLeafSize: "bamboo_leaf_size",//竹子 - 竹叶大小 - no_leaves|small_leaves|large_leaves
        bambooStalkThickness: "bamboo_stalk_thickness",//竹子 - 粗细 - thin|thick
        bigDripleafHead: "big_dripleaf_head",//大型垂滴叶 - 顶部还是颈部 - 0|1
        bigDripleafTilt: "big_dripleaf_tilt",//大型垂滴叶 - 叶片垂下程度 - none|partial_tilt|full_tilt
        biteCounter: "bite_counter",//蛋糕 - 吃掉多少 - 0~6
        blockLightLevel: "block_light_level",//光源方块 - 亮度 - 0~15
        bloom: "bloom",//幽匿催发体 - 蔓延中 - true|false
        booksStored: "books_stored",//雕纹书架 - 藏书数量 - 0~6
        brewingStandSlotABit: "brewing_stand_slot_a_bit",//酿造台 - a槽是否有药水 - true|false
        brewingStandSlotBBit: "brewing_stand_slot_b_bit",//酿造台 - b槽是否有药水 - true|false
        brewingStandSlotCBit: "brewing_stand_slot_c_bit",//酿造台 - c槽是否有药水 - true|false
        buttonPressedBit: "button_pressed_bit",//按钮 - 是否激活 - 0|1
        candles: "candles",//蜡烛 - 数量 - 0~3
        canSummon: "can_summon",//幽匿尖啸体 - 能否召唤监守者 - true|false
        cauldronLiquid: "cauldron_liquid",//炼药锅 - 液体类型 - water|lava|powder_snow
        chemistryTableType: "chemistry_table_type",//所有化学桌 - 类型 - compound_creator|element_constructor|lab_table|material_reducer
        chiselType: "chisel_type",//紫珀柱|石英柱 - 样式 - chiseled|default|lines|smooth
        clusterCount: "cluster_count",//海泡菜 - 数量 - 0~3
        color: "color",//地毯|混凝土|混凝土粉末|玻璃|强化玻璃|潜影盒|陶瓦|羊毛 - 颜色 - white|orange|magenta|light_blue|yellow|lime|pink|gray|silver|cyan|purple|blue|brown|green|red|black
        colorBit: "color_bit",
        composterFillLevel: "composter_fill_level",//堆肥桶 - 堆肥量 - 0~8
        conditionalBit: "conditional_bit",//命令方块 - 有条件 - true|false
        coralColor: "coral_color",//珊瑚|珊瑚块|珊瑚扇 - 珊瑚颜色 - blue|pink|purple|red|yellow
        coralDirection: "coral_direction",//墙上的珊瑚扇 - 朝向 - 0~3
        coralFanDirection: "coral_fan_direction",//珊瑚扇 - 朝向 - 0~3
        coralHangTypeBit: "coral_hang_type_bit",//墙上的珊瑚扇 - 具体类型 - true|false
        coveredBit: "covered_bit",//雪 - 含植物 - true|false
        crackedState: "cracked_state",//海龟蛋 - 碎裂程度 - no_cracks|cracked|max_cracked
        damage: "damage",//铁砧 - 破损程度 - broken|slightly_damaged|undamaged|very_damaged
        deadBit: "dead_bit",//珊瑚|珊瑚块|墙上的珊瑚扇 - 是否失活 - 0|1
        deprecated: "deprecated",//骨块
        direction: "direction",//铁砧|床|蜂巢|钟|大型垂滴叶|营火|化学桌|雕纹书架|可可果|门|末地传送框架|栅栏门|砂轮|南瓜灯|讲台|织布机|南瓜|红石比较器|红石中断器|小型垂滴叶|活板门|绊线钩 - 朝向 - 0~3
        dirtType: "dirt_type",//泥土 - 泥土还是砂土 - normal|coarse
        disarmedBit: "disarmed_bit",//线 - 被破坏 - true|false
        doorHingeBit: "door_hinge_bit",//门 - 门轴方向 - true|false
        doublePlantType: "double_plant_type",//双层植物 - 类型 - fern|grass|paeonia|rose|sunflower|syringa
        dragDown: "drag_down",//气泡柱 - 是不是向下 - true|false
        dripstoneThickness: "dripstone_thickness",//滴水石锥 - 粗细 - tip|merge|frustum|middle|base
        endPortalEyeBit: "end_portal_eye_bit",//末地传送门框架 - 有末影之眼 - true|false
        explodeBit: "explode_bit",//TNT - 能被玩家点燃 - true|false
        extinguished: "extinguished",//营火 - 是否熄灭 - true|false
        facingDirection: "facing_direction",//紫晶芽|紫水晶簇 - 朝向 - 0~5
        fillLevel: "fill_level",//炼药锅 - 盛装量 - 0~6
        flowerType: "flower_type",//小花 - 类型 - allium|cornflower|houstonia|lily_of_the_valley|orchid|oxeye|poppy|tulip_orange|tulip_pink|tulip_red|tulip_white
        groundSignDirection: "ground_sign_direction",//告示牌 - 站立告示牌方位 - 0~15
        growingPlantAge: "growing_plant_age",//洞穴藤蔓 - 年龄 - 0~25
        growth: "growth",//甜菜根|胡萝卜|西瓜茎|马铃薯|南瓜梗|甜浆果丛|小麦 - 年龄 - 0~7
        hanging: "hanging",//灯笼|滴水石锥|红树胎生苗 - 是否悬挂 - true|false
        headPieceBit: "head_piece_bit",//床 - 是不是床头 - true|false
        height: "height",//雪 - 高度 - 0~7
        honeyLevel: "honey_level",//蜂巢 - 蜂蜜量 - 0~5
        hugeMushroomBits: "huge_mushroom_bits",//蘑菇方块 - 类型 - 0~15
        infiniburnBit: "infiniburn_bit",//基岩 - 上方无限火焰 - true|false
        inWallBit: "in_wall_bit",//栅栏门 - 降低以贴合石墙 - true|false
        itemFrameMapBit: "item_frame_map_bit",//物品展示框 - 含地图 - 0|1
        itemFramePhotoBit: "item_frame_photo_bit",//物品展示框 - 含相片 - 0|1
        kelpAge: "kelp_age",//海带 - 年龄 - 0~15
        leverDirection: "lever_direction",//拉杆 - 朝向 - down_east_west|east|west|south|north|up_north_south|up_east_west|down_north_south
        liquidDepth: "liquid_depth",//岩浆|水 - 流体级别 - 0~15
        lit: "lit",//蜡烛 - 是否点燃 - true|false
        moisturizedAmount: "moisturized_amount",//耕地 - 湿润程度 - 0~7
        monsterEggStoneType: "monster_egg_stone_type",//虫蚀方块 - 类型 - chiseled_stone_brick|cobblestone|cracked_stone_brick|stone|mossy_stone_brick|stone_brick
        multiFaceDirectionBits: "multi_face_direction_bits",//发光地衣|幽匿脉络 - 脉络朝向 - 0~63
        newLeafType: "new_leaf_type",//树叶 - 种类 - acacia|dark_oak
        newLogType: "new_log_type",//原木 - 种类 - acacia|dark_oak
        noDropBit: "no_drop_bit",
        occupiedBit: "occupied_bit",//床 - 有没有玩家睡 - true|false
        oldLeafType: "old_leaf_type",//树叶 - 种类 - oak|sqruce|birch|jungle
        oldLogType: "old_log_type",//原木 - 种类 - oak|sqruce|birch|jungle
        openBit: "open_bit",//木桶|门|栅栏门|拉杆|活板门 - 是否打开 - true|false
        outputLitBit: "output_lit_bit",//红石比较器 - 是否激活 - true|false
        outputSubtractBit: "output_subtract_bit",//红石比较器 - 处于减法模式 - true|false
        persistentBit: "persistent_bit",//树叶 - 会不会自然枯萎 - true|false
        pillarAxis: "pillar_axis",//玄武岩|骨块|锁链|蛙明灯|干草块|原木|剥皮原木|菌柄|紫珀柱|石英柱|木头|菌核|红树木|去皮 - 朝向 - x|y|z
        portalAxis: "portal_axis",//下界传送门 - 朝向 - unknow|x|z
        poweredBit: "powered_bit",//讲台|侦测器|幽匿感测体|线|绊线钩 - 是否激活 - true|false
        prismarineBlockType: "prismarine_block_type",//海晶石 - 类型 - bricks|dark|default
        propaguleStage: "propagule_stage",//红树胎生苗 - 悬挂年龄 - 0~4
        railDataBit: "rail_data_bit",//激活铁轨|探测铁轨|动力铁轨 - 是否激活 - true|false
        railDirection: "rail_direction",//所有铁轨 - 朝向 - 0~9
        redstoneSignal: "redstone_signal",//阳光探测器|压力板|红石粉 - 讯号强度 - 0~15
        repeaterDelay: "repeater_delay",//红石中断器 - 延迟度 - 0~3
        respawnAnchorCharge: "respawn_anchor_charge",//重生锚 - 能量等级 - 0~4
        rotation: "rotation",
        sandStoneType: "sand_stone_type",//砂岩 - 类型 - default|heiroglyphs|cut|smooth
        sandType: "sand_type",//沙子 - 类型 - normal|red
        saplingType: "sapling_type",//竹笋|树苗 - 类型 - acacia|birch|dark_oak|jungle|oak|spruce
        seaGrassType: "sea_grass_type",
        spongeType: "sponge_type",//海绵 - 干湿 - dry|wet
        stability: "stability",//脚手架 - 距离中心 - 0~7
        stabilityCheck: "stability_check",//脚手架 - 是否稳定 - true|false
        stoneBrickType: "stone_brick_type",//石砖 - 类型 - chiseled|cracked|default|mossy|smooth
        stoneSlabType: "stone_slab_type",//石台阶 - 类型 - smooth_stone|sandstone|wood|cobblestone|brick|stone_brick|quartz|nether_brick
        stoneSlabType2: "stone_slab_type_2",//石台阶 - 类型 - red_sandstone|purpur|prismarine_rough|prismarine_dark|prismarine_brick|mossy_cobblestone|smooth_sandstone|red_nether_brick
        stoneSlabType3: "stone_slab_type_3",//石台阶 - 类型 - end_stone_brick|smooth_red_sandstone|polished_andesite|andesite|diorite|polished_diorite|granite|polished_granite
        stoneSlabType4: "stone_slab_type_4",//石台阶 - 类型 - mossy_stone_brick|smooth_quartz|stone|cut_sandstone|cut_red_sandstone
        stoneType: "stone_type",//石头 - 类型 - stone|granite|granite_smooth|diorite|diorite_smooth|andesite|andesite_smooth
        strippedBit: "stripped_bit",//木头 - 是否去皮 - true|false
        structureBlockType: "structure_block_type",//结构方块 - 类型 - corner|data|export|invalid|load|save
        structureVoidType: "structure_void_type",//结构空位 - 类型 - air|void
        suspendedBit: "suspended_bit",//线 - 是否没连过绊线钩 - true|false
        tallGrassType: "tall_grass_type",//草丛|蕨 - 类型 - default|tall|fern|snow
        toggleBit: "toggle_bit",//钟 - 是否敲响 - 0|1
        topSlotBit: "top_slot_bit",//台阶 - 是不是上半层 - true|false
        torchFacingDirection: "torch_facing_direction",//红石火把|火把|水下火把 - 朝向 - unknow|west|east|north|south|top
        triggeredBit: "triggered_bit",//发射器|投掷器 - 是否激活 - true|false
        turtleEggCount: "turtle_egg_count",//海龟蛋 - 数量 - 0~3
        twistingVinesAge: "twisting_vines_age",//缠怨藤 - 年龄 - 0~25
        updateBit: "update_bit",//树叶|花盆 - 是否检查更新 - true|false
        upperBlockBit: "upper_block_bit",//门|花|草丛|蕨|小型垂滴叶 - 是否为上半部 - true|false
        upsideDownBit: "upside_down_bit",//楼梯|活板门 - 上下颠倒 - true|false
        vineDirectionBits: "vine_direction_bits",//藤蔓 - 朝向 - 0~15
        wallBlockType: "wall_block_type",//墙 - 类型 - andesite|brick|cobblestone|diorite|end_brick|granite|mossy_cobblestone|mossy_stone_brick|nether_brick|prismarine|red_nether_brick|red_sandstone|sandstone|stone_brick
        wallConnectionTypeEast: "wall_connection_type_east",//边界|墙 - 向东延申方式 - none|short|tall
        wallConnectionTypeNorth: "wall_connection_type_north",//边界|墙 - 向北延申方式 - none|short|tall
        wallConnectionTypeSouth: "wall_connection_type_south",//边界|墙 - 向南延申方式 - none|short|tall
        wallConnectionTypeWest: "wall_connection_type_west",//边界|墙 - 向西延申方式 - none|short|tall
        wallPostBit: "wall_post_bit",//边界|墙 - 有没有中心柱 - true|false
        weepingVinesAge: "weeping_vines_age",//垂泪藤 - 年龄 - 0~25
        weirdoDirection: "weirdo_direction",//楼梯 - 朝向 - 0~3
        woodType: "wood_type",//木头 - 类型 - acacia|birch|dark_oak|jungle|oak|spruce
    };
    //播放唱片组件
    BlockRecordPlayerComponent = {
        //方块坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:recordPlayer",
        componentId: "minecraft:recordPlayer",
        //清空方块中的唱片
        clearRecord: function(){},
        //播放(true)/停止(false)唱片
        isPlaying: function(){ return boolean },
        /*设置播放的唱片
        *     recordItemType - 播放的物品类型，必需是一张唱片
        */
        setRecord: function( recordItemType = ItemType ){}
    };
    //告示牌组件
    BlockSignComponent = {
        //告示牌坐标-readonly
        location: BlockLocation,
        //告示牌内容-readonly
        text: string,
        //组件名称（component）-readonly
        typeId: "minecraft:sign",
        componentId: "minecraft:sign",
    };
    //盛装细雪组件
    BlockSnowContainerComponent = {
        //盛装的量（0~6）
        fillLevel: number,
        //容器坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:snowContainer",
        componentId: "minecraft:snowContainer"
    };
    //方块类型
    BlockType = {
        //能否含水-readonly
        canBeWaterLogged: boolean,
        //方块id-readonly
        id: string,
        //创建一个虚构方块
        createDefaultBlockPermutation: function(){ return BlockPermutation }
    };
    //盛装水组件
    BlockWaterContainerComponent = {
        //液体颜色
        customColor: Color,
        //盛装的量（0~6）
        fillLevel: number,
        //容器坐标-readonly
        location: BlockLocation,
        //组件名称（component）-readonly
        typeId: "minecraft:waterContainer",
        componentId: "minecraft:waterContainer",
        /*用染料调色
        *     itemType - 添入的物品类型，必需是染料
        */
        addDye: function( itemType = ItemType ){}
    };
    //某个返回boolean的方块属性
    BoolBlockProperty = {
        //该属性名称-readonly
        name: string,
        //可用的值-readonly
        validValues: [boolean],
        //该属性的值
        value: boolean
    };
    //按钮激活事件
    ButtonPushEvent = {
        //激活的那格按钮（实际存在的方块）-readonly
        block: Block,
        //所在维度-readonly
        dimension: Dimension,
        //激活按钮的实体-readonly
        source: Entity
    };
    //按钮激活监听器
    ButtonPushEventSignal = {
        //监听按钮激活事件
        subscribe: function( callback = ()=>{} ){
            callback(ButtonPushEvent);
            return callback;
        },
        //取消监听按钮激活事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //一个事件，玩家输入消息时触发
    ChatEvent = {
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
    ChatEventSignal = {
        //添加一个输入消息时要触发的回调函数
        subscribe: function( callback = ()=>{} ){
            callback(ChatEvent);
            return callback;
        },
        //删除回调函数
        unsubscribe: function( callback = ()=>{} ){}
    };
    //定义颜色值
    Color( red = number, green = number, blue = number, alpha = number );
    //rgba颜色值
    Color = {
        //颜色的rgba值（0.0 ~ 1.0）
        alpha: number,//不透明度
        blue: number,//蓝色
        green: number,//绿色
        red: number//红色
    };
    //命令执行后的返回值
    CommandResult = {
        //返回执行成功的次数/实体的数量等-readonly
        successCount: number
    };
    //一个物品容器
    BlockInventoryComponentContainer = {
        //空槽数量-readonly
        emptySlotsCount: number,
        //有几格槽位（容量）-readonly
        size: number,
        //添加物品，类似give
        addItem: function( itemStack = ItemStack ){},
        //清空容器
        clearAll: function(){},
        //清空某格槽位，类似replaceitem空气
        clearItem: function( slot = number ){},
        //获取某格槽位的一组物品
        getItem: function( slot = number ){ return ItemStack },
        //获取某格槽位
        getSlot: function( slot = number ){ return ContainerSlot },
        /*把某格槽位设置为一组物品，类似replaceitem-itemStack可选
        *     itemStack - 填入的一组物品，不写表示空气
        */
        setItem: function( slot = number, itemStack = ItemStack ){},
        /*互换某格槽位的物品
        *     slot - 当前容器的哪格槽位
        *     otherSlot - 跟哪格槽位互换（另一个容器的）
        *     otherContainer - 跟哪个容器互换
        */
        swapItems: function( slot = number, otherSlot = number, otherContainer = Container ){
            return boolean;
        },
        /*移动某格槽位的物品
        *     fromSlot - 移动哪格槽位的物品
        *     toSlot - 到哪格槽位（另一个容器的）
        *     toContainer - 到哪个容器
        */
        transferItem: function( fromSlot = number, toSlot = number, toContainer = Container ){
            return boolean;
        }
    };
    //一个物品槽位
    ContainerSlot = {
        //物品数量
        amount: number,
        //物品数据值
        data: number,
        //该槽位是否真实存在-readonly
        isValid: boolean,
        //物品名称-可有可无（没有时使用默认名称）
        nameTag: string,
        //物品id-可有可无-readonly（"minecraft:stone"）（没有时表示槽位为空）
        typeId: string,
        //清空槽位
        clearItem: function(){},
        //获取这组物品
        getItem: function(){ return ItemStack },
        //获取物品说明（Lore）
        getLore: function(){ return [string] },
        /*将一组物品填入该槽位-itemStack可选
        *     itemStack - 填入的物品，不填表示清空槽位
        */
        setItem: function( itemStack = ItemStack ){},
        /*设置物品说明（Lore）
        *     loreList - 一个string代表一行 ["第一行","第二行","第三行"]
        */
        setLore: function( loreList = [string] ){}
    };
    //导致数据驱动的实体事件
    DataDrivenEntityTriggerEvent = {
        //触发的实体-readonly
        entity: Entity,
        //被触发的数据的名称-readonly
        id: string,
        //受影响的组件状态的列表-readonly
        modifiers: [DefinitionModifier]
    };
    //实体事件监听器
    DataDrivenEntityTriggerEventSignal = {
        /*监听实体事件-option可选
        *     option - 监听哪些实体/哪些事件（event），不写表示全部监听
        */
        subscribe: function( callback = ()=>{}, option = {EntityDataDrivenTriggerEventOptions} ){
            callback(DataDrivenEntityTriggerEvent);
            return callback;
        },
        //取消监听实体事件
        unsubscribe: function( callback = ()=>{} ){}
    };
    //?
    DefinitionModifier = {
        //-readonly
        componentGroupsToAdd: [string],
        //-readonly
        componentGroupsToRemove: [string],
        //
        triggers: [Trigger]
    };
    //一个维度
    Dimension = {
        //维度id-readonly
        id: string,
        /*制造爆炸-explosionOptions可选
        *     location - 爆炸的中心
        *     radius - 爆炸半径，单位为1米
        *     explosionOptions - 设定爆炸类型，不填则使用默认值
        */
        createExplosion: function( location = Location, radius = number, explosionOptions = {ExplosionOptions} ){},
        //获取某格方块
        getBlock: function( location = BlockLocation ){ return Block },
        /*用射线选取第一个方块-options可选
        *     location - 射线出发点
        *     direction - 射线射出的方向（矢量）
        *     options - 射线能否穿透某些方块&射线距离，不填表示不穿透方块&无限远
        */
        getBlockFromRay: function( location = Location, direction = Vector, options = {BlockRaycastOptions} ){
            return Block;
        },
        /*选取当前维度的实体-getEntities可选
        *     getEntities - 选取的实体，一个目标选择器，不填选中所有实体
        */
        getEntities: function( getEntities = {EntityQueryOptions} ){ return EntityIterator },
        //选取某格内的实体
        getEntitiesAtBlockLocation: function( location = BlockLocation ){ return [Entity] },
        /*用射线选取实体-options可选
        *     location - 射线出发点
        *     direction - 射线射出的方向（矢量）
        *     options - 设置射线距离，不填表示无限远
        */
        getEntitiesFromRay: function( location = Location, direction = Vector, options = {EntityRaycastOptions} ){
            return [Entity];
        },
        /*选取当前维度的玩家-getPlayers可选
        *     getPlayers - 选取的玩家，一个目标选择器，不填选中所有玩家
        */
        getPlayers: function( getPlayers = {EntityQueryOptions} ){ return PlayerIterator },
        /*在当前维度执行命令
        *     commandString - 要执行的一行命令，不能斜杠开头
        */
        runCommandAsync: function( commandString = string ){ return CommandResult },
    };
};