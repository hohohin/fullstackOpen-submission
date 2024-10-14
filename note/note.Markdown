# part1 (javascripts)

## map()
基本用法：
arrays.map( (item,index) => () )
### 使用 map 来遍历 parts 数组并累加练习数量的方法：
const Total = ({ parts }) => {
  const exercisesArray = parts.map(part => part.exercises)
  const totalExercises = exercisesArray.reduce((sum, exercises) => sum + exercises, 0)
  
  return (
    <div>
      <p>
        <strong>练习总数：</strong> {totalExercises}
      </p>
    </div>
  )
}

* 箭头函数中的props部分写作{parts},用法相当于props.parts，相当于函数的参数。如果上述代码写作const Total = (props) => {...}, 那么下方的
  const exercisesArray = parts.map(part => part.exercises) 则需要写作
  const exercisesArray = props.parts.map(part => part.exercises)

* 通过 map方法提取数组中每个键值对的值：
  const exercisesArray = parts.map(part => part.exercises)
  这是通过 map 方法遍历 parts 数组，将每个 part 的 exercises 属性提取出来，形成一个新的数组 exercisesArray。

* 常用的计算总和的方式还是应该是用 reduce 方法，其用法是：

  ```
  const totalExercises = exercisesArray.reduce((sum, exercises) => sum + exercises, 0)
  ```

  * 其中，reduce 方法的第一个参数是一个回调函数，第二个参数是初始值。回调函数接收两个参数，第一个是累加器，第二个是当前值。累加器初始值为 0。

    例如，当 exercisesArray 为 [1, 2, 3, 4, 5] 时，reduce 方法的执行过程如下：
    1. 初始累加器 sum = 0, 当前值 exercises = 1, 累加结果 sum = 0 + 1 = 1
    2. 累加器 sum = 1, 当前值 exercises = 2, 累加结果 sum = 1 + 2 = 3
    3. 累加器 sum = 3, 当前值 exercises = 3, 累加结果 sum = 3 + 3 = 6
    4. 累加器 sum = 6, 当前值 exercises = 4, 累加结果 sum = 6 + 4 = 10
    5. 累加器 sum = 10, 当前值 exercises = 5, 累加结果 sum = 10 + 5 = 15
    * 最终累加结果为 15。

* React 当中，map的用法和在JavaScript当中有所不同，React 需要处理的是 DOM 对象，所以一般在 React 中使用 map 会需要添加 key 
  对于 key，一般可以使用 map 的第二参数 index（但只能用于列表不改变的情况下）。
  如果数组的元素是对象，那使用键值对中的键作为 key 是最合适的：
  ```
  const todos = [
    { id: 1, text: '学习React' },
    { id: 2, text: '写代码' }
  ];
  const todoList = todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ));
  ```

# part2(React)

## destructuring
  [case of destructuring](https://fullstackopen.com/zh/part1/%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81%EF%BC%8C%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86#refactoring-the-components)

# re-rendering
  - setInterval(() => {
    ...
  },1000)

  ## *stateful component*
  notice:
    在React中是禁止直接改变状态的，因为它可能导致意想不到的副作用。改变状态必须始终通过将状态设置为一个新的对象来完成。如果前一个状态对象的属性没有改变，它们需要简单地复制，这可以通过将这些属性复制到一个新的对象中，并将其设置为新的状态来完成。

  #### useState()
    基本语法：
    const [state, setState] = useState(initialValue);
    - state: 当前状态值
    - setState: 更新状态的函数
      ![alt text](/note/src/setstate.png)
      ! setValue(0)和setValue(prevalue => prevalue + 1) 在这里要注意对更新状态的函数的调用方式
    - initialValue: 状态值的初始值
      ·可以用对象作为状态[case](https://fullstackopen.com/zh/part1/%E6%B7%B1%E5%85%A5_react_%E5%BA%94%E7%94%A8%E8%B0%83%E8%AF%95#complex-state)
      ·不要在循环、条件或嵌套函数中调用 useState。
      ·只在 React 函数组件或自定义 Hook 中使用 useState。
    -addition: Hooks
      useState(), useEffect(), useContext(), useReducer(), useCallback(), useMemo(), useRef(), useImperativeHandle(), useLayoutEffect(), useDebugValue()
    
  - setTimeOut(()=>{})

  ### Event handling
    ##### handleClick = () =>{}
      - 调用方式可以是：<button onClick={handleClick}>
        -addition: onClick用法：<button onClick={() => abc}> click </button>
      - 一般不接受参数
      - 定义在状态函数后面，return 前面
      - 一般用于处理更新状态函数

  ### [Lifting state up](https://react.dev/learn/tutorial-tic-tac-toe#lifting-state-up)
    - React建议，如果多个组件需要共享状态，应该将状态提升到它们的父组件中。
    - 状态提升的步骤：
      1. 找到公共的父组件
      2. 将状态定义在父组件中
      3. 将状态作为 props 传递给子组件
    - [Lifting state up](https://fullstackopen.com/zh/part1/%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81%EF%BC%8C%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86#passing-state-to-child-components)

  ### [complexState](https://fullstackopen.com/zh/part1/%E6%B7%B1%E5%85%A5_react_%E5%BA%94%E7%94%A8%E8%B0%83%E8%AF%95#complex-state)
    const handleLeftClick = () => {
      const newClicks = {
      ...clicks,
      left: clicks.left + 1
      }
      setClicks(newClicks)
    }

    const handleRightClick = () => {
      const newClicks = {
        ...clicks,
        right: clicks.right + 1
      }
      setClicks(newClicks)
    }
    
    const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })
    const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  ## *conditional rendering*

  ## *debuging*
    - debugger in Source tag of devtool
   
# functions
  ## function that returns a function
  目的是创建可个性化的事件处理程序（handle）
  [sample](https://fullstackopen.com/zh/part1/%E6%B7%B1%E5%85%A5_react_%E5%BA%94%E7%94%A8%E8%B0%83%E8%AF%95#function-that-returns-a-function)
 

# some other notes:
- 展开运算符：
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // arr2 现在是 [1, 2, 3, 4, 5]