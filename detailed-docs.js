// Widget 详细介绍补充数据
const WIDGET_DETAILED_DOCS = {
  'scaffold': {
    overview: 'Scaffold 是 Material Design 的基本结构框架，它提供了标准的页面布局结构，包括 AppBar、Body、FloatingActionButton、Drawer、BottomNavigationBar 等。一个典型的 Material 应用页面都以 Scaffold 为基础。',
    useCases: [
      '创建标准的 Material 应用页面',
      '需要 AppBar 和 Body 结构的页面',
      '需要 FloatingActionButton 的页面',
      '需要侧边抽屉菜单的页面'
    ],
    commonPatterns: [
      { title: '基本页面', code: 'Scaffold(appBar: AppBar(title: Text(\'Title\')), body: Center(child: Text(\'Content\')))' },
      { title: '带 FAB', code: 'Scaffold(body: body, floatingActionButton: FloatingActionButton(onPressed: () {}, child: Icon(Icons.add)))' },
      { title: '带抽屉', code: 'Scaffold(drawer: Drawer(...), body: body)' },
      { title: '带底部导航', code: 'Scaffold(bottomNavigationBar: BottomNavigationBar(...), body: body)' }
    ],
    pitfalls: [
      '一个页面只能有一个 Scaffold，不要嵌套使用',
      'Scaffold 的 body 会占据剩余空间，不需要额外包裹 Expanded',
      'FloatingActionButton 会自动定位在右下角，不需要额外布局',
      'Drawer 需要配合 Scaffold.of(context).openDrawer() 使用'
    ],
    performance: '优秀。Scaffold 是 Material 页面的基础，性能开销很小。'
  },
  'appbar': {
    overview: 'AppBar 是 Material Design 的应用栏组件，通常放在页面顶部，显示标题、导航按钮和操作按钮。它支持多种自定义，包括 flexibleSpace、bottom 等。',
    useCases: [
      '显示页面标题',
      '提供返回/菜单按钮',
      '放置操作按钮（搜索、更多等）',
      '显示 TabBar'
    ],
    commonPatterns: [
      { title: '基本 AppBar', code: 'AppBar(title: Text(\'Title\'))' },
      { title: '带操作按钮', code: 'AppBar(title: Text(\'Title\'), actions: [IconButton(icon: Icon(Icons.search), onPressed: () {})])' },
      { title: '带返回按钮', code: 'AppBar(leading: IconButton(icon: Icon(Icons.arrow_back), onPressed: () => Navigator.pop(context)))' },
      { title: '带 TabBar', code: 'AppBar(bottom: TabBar(tabs: [...]))' }
    ],
    pitfalls: [
      'AppBar 默认有阴影，设置 elevation: 0 可以移除',
      '在 Scaffold 中使用时，AppBar 会自动处理状态栏安全区域',
      'actions 中的按钮会自动使用 IconTheme 的样式',
      'leading 会自动根据路由栈显示返回按钮或菜单按钮'
    ],
    performance: '优秀。AppBar 是轻量级组件。'
  },
  'card': {
    overview: 'Card 是 Material Design 的卡片组件，带有圆角和阴影。它通常用于分组相关信息，如列表项、图片 + 文本组合等。',
    useCases: [
      '显示列表项',
      '显示图片 + 文本组合',
      '分组相关信息',
      '创建仪表板卡片'
    ],
    commonPatterns: [
      { title: '基本卡片', code: 'Card(child: ListTile(title: Text(\'Title\')))' },
      { title: '带图片卡片', code: 'Card(child: Column(children: [Image.network(url), ListTile(title: Text(\'Title\'))]))' },
      { title: '自定义阴影', code: 'Card(elevation: 8, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)))' }
    ],
    pitfalls: [
      'Card 默认有圆角，设置 shape 可以自定义',
      'Card 内部通常使用 ListTile 来显示内容',
      'elevation 过大会影响性能',
      'Card 会自动应用 Material 主题的颜色'
    ],
    performance: '优秀。Card 内部使用 Material 组件，性能开销很小。'
  },
  'listview': {
    overview: 'ListView 是可滚动的列表组件，支持动态加载（builder 模式）。它是 Flutter 中最常用的列表组件，适用于显示大量数据。',
    useCases: [
      '显示长列表数据',
      '动态加载列表项',
      '显示分隔列表（ListView.separated）',
      '水平滚动列表'
    ],
    commonPatterns: [
      { title: '静态列表', code: 'ListView(children: [ListTile(...), ListTile(...)])' },
      { title: '动态列表', code: 'ListView.builder(itemCount: 100, itemBuilder: (context, index) => ListTile(title: Text(\'Item $index\')))' },
      { title: '分隔列表', code: 'ListView.separated(itemCount: 100, separatorBuilder: (_, __) => Divider(), itemBuilder: (context, index) => ListTile(...))' },
      { title: '水平列表', code: 'ListView(scrollDirection: Axis.horizontal, children: [...])' }
    ],
    pitfalls: [
      'ListView.builder 适合大量数据，会懒加载',
      'ListView 默认会占据所有空间，在 Column 中需要包裹 Expanded',
      '在 Column 中使用 ListView 需要设置 shrinkWrap: true 和 physics: NeverScrollableScrollPhysics()',
      '列表项需要保持唯一 key，特别是动态列表'
    ],
    performance: '优秀（builder 模式）。ListView.builder 会懒加载，只渲染可见项。'
  },
  'gridview': {
    overview: 'GridView 是网格布局的可滚动列表，支持固定列数或固定间距。适用于显示图片网格、产品列表等。',
    useCases: [
      '显示图片网格',
      '显示产品列表',
      '显示图标网格',
      '任何需要网格布局的场景'
    ],
    commonPatterns: [
      { title: '固定列数', code: 'GridView.count(crossAxisCount: 2, children: [...])' },
      { title: '动态网格', code: 'GridView.builder(gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2), itemCount: 100, itemBuilder: (context, index) => Card(...))' },
      { title: '自适应列数', code: 'GridView.extent(maxCrossAxisExtent: 200, children: [...])' }
    ],
    pitfalls: [
      'GridView 不会自动滚动，在 Column 中需要设置 shrinkWrap: true',
      'gridDelegate 控制网格布局，常用 SliverGridDelegateWithFixedCrossAxisCount',
      '在 CustomScrollView 中使用 SliverGrid',
      '网格项大小受 crossAxisSpacing 和 mainAxisSpacing 影响'
    ],
    performance: '良好。GridView.builder 会懒加载，但网格布局计算开销比 ListView 大。'
  },
  'textfield': {
    overview: 'TextField 是 Material Design 的文本输入框，支持各种输入类型、验证、格式化等。它是表单输入的核心组件。',
    useCases: [
      '单行文本输入',
      '多行文本输入（maxLines: null）',
      '密码输入（obscureText: true）',
      '数字输入（keyboardType: TextInputType.number）'
    ],
    commonPatterns: [
      { title: '基本输入框', code: 'TextField(decoration: InputDecoration(labelText: \'Name\'))' },
      { title: '密码输入', code: 'TextField(obscureText: true, decoration: InputDecoration(labelText: \'Password\'))' },
      { title: '多行输入', code: 'TextField(maxLines: null, minLines: 3, decoration: InputDecoration(labelText: \'Description\'))' },
      { title: '带图标', code: 'TextField(decoration: InputDecoration(prefixIcon: Icon(Icons.email), labelText: \'Email\'))' }
    ],
    pitfalls: [
      'TextField 需要配合 TextEditingController 获取输入值',
      '密码输入需要设置 obscureText: true',
      '数字输入需要设置 keyboardType: TextInputType.number',
      '输入框获得焦点会自动滚动到可见区域'
    ],
    performance: '优秀。TextField 是轻量级组件。'
  },
  'elevatedbutton': {
    overview: 'ElevatedButton 是 Material Design 的凸起按钮，用于表示主要操作。它有阴影效果，视觉上比其他类型按钮更突出。',
    useCases: [
      '表单提交按钮',
      '主要操作按钮',
      '确认对话框的确认按钮',
      '任何需要强调的操作'
    ],
    commonPatterns: [
      { title: '基本按钮', code: 'ElevatedButton(onPressed: () {}, child: Text(\'Submit\'))' },
      { title: '自定义样式', code: 'ElevatedButton.styleFrom(backgroundColor: Colors.blue, foregroundColor: Colors.white, padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12))' },
      { title: '禁用按钮', code: 'ElevatedButton(onPressed: null, child: Text(\'Disabled\'))' },
      { title: '带图标按钮', code: 'ElevatedButton.icon(onPressed: () {}, icon: Icon(Icons.send), label: Text(\'Send\'))' }
    ],
    pitfalls: [
      'onPressed 为 null 时按钮禁用',
      'ElevatedButton 的 child 通常使用 Text',
      '按钮样式使用 ElevatedButton.styleFrom() 设置',
      '按钮会自动应用主题颜色'
    ],
    performance: '优秀。按钮是轻量级组件。'
  },
  'checkbox': {
    overview: 'Checkbox 是复选框组件，用于多选场景。它通常与 ListTile 配合使用，形成 CheckboxListTile。',
    useCases: [
      '多选表单',
      '选择多个选项',
      '开关选项（单个 Checkbox）',
      '待办事项列表'
    ],
    commonPatterns: [
      { title: '基本复选框', code: 'Checkbox(value: isChecked, onChanged: (v) => setState(() => isChecked = v))' },
      { title: '带 ListTile', code: 'CheckboxListTile(value: isChecked, title: Text(\'Option\'), onChanged: (v) => setState(() => isChecked = v))' },
      { title: '自定义颜色', code: 'Checkbox(value: isChecked, activeColor: Colors.green, onChanged: ...)' },
      { title: '三态复选框', code: 'Checkbox(value: triStateValue, tristate: true, onChanged: ...)' }
    ],
    pitfalls: [
      'Checkbox 需要配合 setState 使用',
      'value 为 null 时显示三态（需要 tristate: true）',
      'CheckboxListTile 更方便，内置了文本和布局',
      '复选框大小固定，不能直接设置 size'
    ],
    performance: '优秀。Checkbox 是轻量级组件。'
  },
  'switch': {
    overview: 'Switch 是开关组件，用于二元选择（开/关）。它通常用于设置选项、开关功能等场景。',
    useCases: [
      '设置开关',
      '启用/禁用功能',
      '二元选择',
      '快速切换状态'
    ],
    commonPatterns: [
      { title: '基本开关', code: 'Switch(value: isOn, onChanged: (v) => setState(() => isOn = v))' },
      { title: '带 ListTile', code: 'SwitchListTile(value: isOn, title: Text(\'Enable\'), subtitle: Text(\'Description\'), onChanged: (v) => setState(() => isOn = v))' },
      { title: '自定义颜色', code: 'Switch(value: isOn, activeColor: Colors.green, activeTrackColor: Colors.lightGreen, onChanged: ...)' }
    ],
    pitfalls: [
      'Switch 需要配合 setState 使用',
      'SwitchListTile 更方便，内置了文本和布局',
      '开关有动画效果，频繁切换会影响性能',
      'activeColor 是打开时的颜色，inactive 状态颜色由主题决定'
    ],
    performance: '优秀。Switch 是轻量级组件。'
  },
  'dropdownbutton': {
    overview: 'DropdownButton 是下拉选择按钮，用于从多个选项中选择一个。它适用于选项较多的场景。',
    useCases: [
      '从列表中选择一项',
      '选择分类/标签',
      '选择数量/规格',
      '表单下拉选择'
    ],
    commonPatterns: [
      { title: '基本下拉', code: 'DropdownButton(value: selected, items: options.map((o) => DropdownMenuItem(value: o, child: Text(o))).toList(), onChanged: (v) => setState(() => selected = v))' },
      { title: '带提示', code: 'DropdownButton(hint: Text(\'Select\'), value: selected, items: [...], onChanged: ...)' },
      { title: '占满宽度', code: 'DropdownButton(isExpanded: true, value: selected, items: [...], onChanged: ...)' },
      { title: '自定义下划线', code: 'DropdownButton(underline: SizedBox(), ...)' }
    ],
    pitfalls: [
      'value 必须是 items 中某个选项的值',
      'value 为 null 时显示 hint',
      'DropdownButton 不会自动占满宽度，需要设置 isExpanded: true',
      'items 必须是 List<DropdownMenuItem<T>> 类型'
    ],
    performance: '良好。选项较多时性能会下降。'
  },
  'slider': {
    overview: 'Slider 是滑动选择器，用于在一定范围内选择数值。它适用于音量、亮度、评分等场景。',
    useCases: [
      '音量/亮度调节',
      '价格范围选择',
      '评分选择',
      '任何数值范围选择'
    ],
    commonPatterns: [
      { title: '基本滑块', code: 'Slider(value: value, min: 0, max: 100, divisions: 10, onChanged: (v) => setState(() => value = v))' },
      { title: '带标签', code: 'Slider(value: value, divisions: 10, label: value.round().toString(), onChanged: ...)' },
      { title: '离散滑块', code: 'Slider(value: value, divisions: 5, onChanged: ...)' },
      { title: '范围滑块', code: 'RangeSlider(values: RangeValues(min, max), min: 0, max: 100, divisions: 10, onChanged: ...)' }
    ],
    pitfalls: [
      'Slider 的 value 必须在 min 和 max 之间',
      'divisions 设置分段数，为 null 时连续',
      'label 会在拖动时显示',
      'RangeSlider 用于选择范围'
    ],
    performance: '优秀。Slider 是轻量级组件。'
  },
  'tabbar': {
    overview: 'TabBar 是 Material Design 的标签页导航栏，通常与 TabBarView 配合使用，实现标签页切换功能。',
    useCases: [
      '分类切换',
      '内容分组',
      '顶部导航',
      '页面内切换'
    ],
    commonPatterns: [
      { title: '基本 TabBar', code: 'TabBar(tabs: [Tab(text: \'Tab 1\'), Tab(text: \'Tab 2\')])' },
      { title: '带图标', code: 'TabBar(tabs: [Tab(icon: Icons.home, text: \'Home\'), Tab(icon: Icons.search, text: \'Search\')])' },
      { title: '可滚动', code: 'TabBar(isScrollable: true, tabs: [...])' },
      { title: '配合 TabBarView', code: 'DefaultTabController(length: 3, child: Column(children: [TabBar(...), Expanded(child: TabBarView(...))]))' }
    ],
    pitfalls: [
      'TabBar 需要 TabController，可以使用 DefaultTabController',
      'TabBar 的 tabs 数量必须与 TabBarView 的 children 数量一致',
      '可滚动 TabBar 需要设置 isScrollable: true',
      'TabBar 通常放在 AppBar 的 bottom 属性中'
    ],
    performance: '优秀。TabBar 是轻量级组件。'
  },
  'bottomnavigationbar': {
    overview: 'BottomNavigationBar 是底部导航栏，用于在主要功能间切换。它通常放在 Scaffold 的 bottomNavigationBar 属性中。',
    useCases: [
      '应用主导航',
      '主要功能切换',
      '底部标签导航',
      '多页面应用'
    ],
    commonPatterns: [
      { title: '基本导航', code: 'BottomNavigationBar(items: [BottomNavigationBarItem(icon: Icons.home, label: \'Home\'), ...], currentIndex: index, onTap: (i) => setState(() => index = i)))' },
      { title: '固定模式', code: 'BottomNavigationBar(type: BottomNavigationBarType.fixed, items: [...])' },
      { title: '移位模式', code: 'BottomNavigationBar(type: BottomNavigationBarType.shifting, items: [...])' },
      { title: '带颜色', code: 'BottomNavigationBar(selectedItemColor: Colors.blue, unselectedItemColor: Colors.grey, ...)' }
    ],
    pitfalls: [
      'items 少于 3 个时使用 fixed 模式',
      'items 多于 3 个时使用 shifting 模式',
      'currentIndex 必须与 items 索引对应',
      'onTap 中需要更新 currentIndex'
    ],
    performance: '优秀。BottomNavigationBar 是轻量级组件。'
  },
  'animatedcontainer': {
    overview: 'AnimatedContainer 是 Container 的动画版本，当属性变化时自动执行动画。它是最简单的隐式动画组件。',
    useCases: [
      '尺寸动画（宽、高）',
      '颜色动画',
      '圆角动画',
      '位置动画'
    ],
    commonPatterns: [
      { title: '尺寸动画', code: 'AnimatedContainer(duration: Duration(milliseconds: 300), width: isSelected ? 200 : 100, height: isSelected ? 200 : 100)' },
      { title: '颜色动画', code: 'AnimatedContainer(duration: Duration(milliseconds: 300), color: isSelected ? Colors.blue : Colors.red)' },
      { title: '圆角动画', code: 'AnimatedContainer(duration: Duration(milliseconds: 300), decoration: BoxDecoration(borderRadius: BorderRadius.circular(isSelected ? 50 : 0)))' },
      { title: '组合动画', code: 'AnimatedContainer(duration: Duration(milliseconds: 300), width: w, height: h, color: c, decoration: BoxDecoration(borderRadius: r))' }
    ],
    pitfalls: [
      '必须设置 duration',
      '属性变化时自动执行动画',
      '可以同时动画多个属性',
      'curve 可以设置动画曲线'
    ],
    performance: '良好。AnimatedContainer 会自动处理动画，但频繁动画会影响性能。'
  },
  'futurebuilder': {
    overview: 'FutureBuilder 是监听 Future 结果并重建 UI 的组件。它适用于异步数据加载场景，如网络请求、文件读取等。',
    useCases: [
      '网络请求数据显示',
      '异步数据加载',
      '数据库查询显示',
      '文件读取显示'
    ],
    commonPatterns: [
      { title: '基本用法', code: 'FutureBuilder(future: fetchData(), builder: (context, snapshot) { if (snapshot.hasData) return Text(snapshot.data); return CircularProgressIndicator(); })' },
      { title: '处理错误', code: 'FutureBuilder(future: fetchData(), builder: (context, snapshot) { if (snapshot.hasError) return Text(\'Error: ${snapshot.error}\'); ... })' },
      { title: '连接状态', code: 'FutureBuilder(future: fetchData(), builder: (context, snapshot) { switch(snapshot.connectionState) { case ConnectionState.waiting: return CircularProgressIndicator(); ... } })' }
    ],
    pitfalls: [
      'future 变化时需要使用 key 或 FutureBuilder 会重用状态',
      'snapshot.connectionState 有 waiting、active、done 等状态',
      'snapshot.hasData 和 snapshot.hasError 判断数据和错误',
      '避免在 builder 中创建新的 Future'
    ],
    performance: '良好。FutureBuilder 只在 Future 完成时重建 UI。'
  },
  'streambuilder': {
    overview: 'StreamBuilder 是监听 Stream 数据流并重建 UI 的组件。它适用于实时数据更新场景，如 WebSocket、事件流等。',
    useCases: [
      '实时数据显示',
      'WebSocket 数据',
      '事件流处理',
      '表单输入验证'
    ],
    commonPatterns: [
      { title: '基本用法', code: 'StreamBuilder(stream: myStream(), builder: (context, snapshot) { if (snapshot.hasData) return Text(snapshot.data); return CircularProgressIndicator(); })' },
      { title: '错误处理', code: 'StreamBuilder(stream: myStream(), builder: (context, snapshot) { if (snapshot.hasError) return Text(\'Error\'); ... })' },
      { title: '初始数据', code: 'StreamBuilder(initialData: \'Initial\', stream: myStream(), builder: (context, snapshot) => Text(snapshot.data))' }
    ],
    pitfalls: [
      'Stream 会持续发射数据，注意内存泄漏',
      'snapshot.data 是最新数据',
      '可以使用 initialData 设置初始值',
      'Stream 完成后不会再更新'
    ],
    performance: '良好。StreamBuilder 只在数据变化时重建 UI。'
  },
  'gestureDetector': {
    overview: 'GestureDetector 是手势检测器，用于响应各种手势，如点击、双击、长按、拖拽、缩放等。',
    useCases: [
      '点击事件处理',
      '双击事件处理',
      '长按事件处理',
      '拖拽和缩放'
    ],
    commonPatterns: [
      { title: '点击', code: 'GestureDetector(onTap: () => print(\'Tap\'), child: Container(...))' },
      { title: '双击', code: 'GestureDetector(onDoubleTap: () => print(\'Double\'), child: Container(...))' },
      { title: '长按', code: 'GestureDetector(onLongPress: () => print(\'Long\'), child: Container(...))' },
      { title: '拖拽', code: 'GestureDetector(onPanUpdate: (d) => print(d.delta), child: Container(...))' }
    ],
    pitfalls: [
      'GestureDetector 会吸收手势事件，子组件可能无法响应',
      'onTap 和 onDoubleTap 可能冲突',
      '需要透明背景时，Container 颜色设为透明',
      '复杂手势使用 GestureDetector 的组合'
    ],
    performance: '优秀。GestureDetector 是轻量级组件。'
  },
  'cliprrect': {
    overview: 'ClipRRect 使用圆角矩形裁剪子组件。它通常用于创建圆角图片、圆角容器等。',
    useCases: [
      '圆角图片',
      '圆角容器',
      '裁剪子组件',
      '创建特殊形状'
    ],
    commonPatterns: [
      { title: '圆角图片', code: 'ClipRRect(borderRadius: BorderRadius.circular(16), child: Image.network(url))' },
      { title: '全圆角', code: 'ClipRRect(borderRadius: BorderRadius.all(Radius.circular(50)), child: child)' },
      { title: '单侧圆角', code: 'ClipRRect(borderRadius: BorderRadius.vertical(top: Radius.circular(16)), child: child)' }
    ],
    pitfalls: [
      'ClipRRect 会影响性能，避免大量使用',
      'borderRadius 可以是 BorderRadius.circular 或 BorderRadius.vertical/horizontal',
      '裁剪后子组件超出部分不可见',
      '可以使用 ClipOval 创建圆形'
    ],
    performance: '中等。裁剪操作会影响性能，避免大量使用。'
  },
  'visibility': {
    overview: 'Visibility 控制子组件显示/隐藏。与直接移除组件不同，Visibility 可以选择是否保留布局空间。',
    useCases: [
      '条件显示组件',
      '切换组件可见性',
      '保留布局空间的隐藏',
      '动画过渡'
    ],
    commonPatterns: [
      { title: '基本用法', code: 'Visibility(visible: isVisible, child: Text(\'Content\'))' },
      { title: '替代组件', code: 'Visibility(visible: isVisible, replacement: Text(\'Hidden\'), child: Text(\'Visible\'))' },
      { title: '不保留空间', code: 'Visibility(visible: isVisible, maintainSize: false, maintainAnimation: false, child: child)' }
    ],
    pitfalls: [
      'visible: false 时默认保留布局空间',
      '使用 replacement 可以显示替代组件',
      'maintainSize、maintainAnimation 控制隐藏时的行为',
      '完全不渲染使用 Offstage 或条件渲染'
    ],
    performance: '优秀。Visibility 是轻量级组件。'
  },
  'hero': {
    overview: 'Hero 用于创建页面切换时的共享元素动画。两个页面的 Hero 组件使用相同的 tag，Flutter 会自动创建从一个位置到另一个位置的动画。',
    useCases: [
      '图片放大动画',
      '共享元素过渡',
      '列表项到详情页动画',
      '卡片展开动画'
    ],
    commonPatterns: [
      { title: '图片 Hero', code: 'Hero(tag: \'image-$id\', child: Image.network(url)) // 两个页面使用相同 tag' },
      { title: '自定义动画', code: 'Hero(tag: tag, flightShuttleBuilder: (context, animation, direction, ...) => CustomWidget(animation))' },
      { title: '禁用 Hero', code: 'HeroMode(enabled: false, child: Hero(tag: tag, child: child))' }
    ],
    pitfalls: [
      '两个页面的 tag 必须相同',
      'Hero 的 child 必须是同一个类型',
      'Hero 动画在 Navigator 推送/弹出时执行',
      '复杂动画使用 flightShuttleBuilder'
    ],
    performance: '良好。Hero 动画涉及两个页面的渲染，复杂动画会影响性能。'
  }
};
