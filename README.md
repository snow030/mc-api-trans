# mc-api-trans
尝试把mc的api模块翻译成容易看懂的js写法，并标注上合理的中文注释

> ## 请注意
> - [`server.ts`](https://github.com/snow030/mc-api-trans/blob/main/server/server.ts) [`gametest.ts`](https://github.com/snow030/mc-api-trans/blob/main/gametest/gametest.ts) 是原版的Minecraft api模块，请不要对它进行改动
> - 你可以对所有 `.js(javascript)` 文档进行改动，但请根据下方给予的规范做编辑

____

## 编辑规范
1. ### 每个模块源代码都会 **export** `enum` `class` `interface` `function` `const` 5种方法
    - 因此你应该在 `.js` 中添加最多5个箭头函数，例如：
        ```javascript
        Enum => {
        };
        Class => {
        };
        ```
    - **注意**，箭头函数的开头必须大写
        > **`enum`** -- *wrong* ***(X)***<br>
        > **`Enum`** -- *right* ***(O)***

2. ### 箭头函数中必须填入原版模块中定义的东西
    - 但为了方便阅读，一切定义的东西都应当转换为 `Object {}`，例如：
        ```typescript
        export enum ObjectiveSortOrder {
            ascending = 0,
            descending = 1,
        }
        ```
        将转换成
        ```javascript
        Enum => {
            ObjectiveSortOrder = {
                ascending: 0,
                descending: 1
            };
        };
        ```
        
        ```typescript
        export class BeforeItemUseEvent {
            protected constructor();
            cancel: boolean;
            item: ItemStack;
            readonly source: Entity;
        }
        ```
        将转换成
        ```javascript
        Class => {
            BeforeItemUseEvent = {
                cancle: boolean,
                item: ItemStack,
                //-readonly
                source: Entity,
            };
        };
        ```
    > 转换成 `Object {}` 的方式能够让没学过 **ts** 和 **class类别** 的人明确地知道<br>
    > `BeforeItemUseEvent.source` 将返回一个 `Entity`

3. ### 几乎所有物件都必须标注中文解释
    - 基本上就是一行注释一行代码，一行注释一行代码。注释在上方，代码在下方
    - 仅读 `readonly` 的参数必须在注释后方写上 `-readonly`
    - 性质相同的参数可以将注释标在各参数的后方,而非上方，例如：
        ```javascript
        GameMode = {
            adventure: 'adventure',//冒险
            creative: 'creative',//创造
            spectator: 'spectator',//观察者
            survival: 'survival'//生存
        };
        ```
    > **注意**，注释的用意是为了让玩家快速了解该物件的大致用途，而非它的所有特性。过多的注释反而会造成混乱<br>
    > **如：**【*输入消息时触发的事件，这事件会在消息发出前触发*】应当缩写成 【*输入消息事件*】即可
