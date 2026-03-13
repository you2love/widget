// Flutter Widget 数据
const WIDGET_DATA = [
  {
    id: 'container',
    name: 'Container',
    description: '一个方便组合各种约束的便捷组件，支持边距、填充、边框、阴影等',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'alignment', type: 'AlignmentGeometry?', description: '子组件的对齐方式', defaultValue: 'Alignment.center', example: 'Alignment.centerLeft' },
      { name: 'padding', type: 'EdgeInsetsGeometry?', description: '内边距', example: 'EdgeInsets.all(16.0)' },
      { name: 'margin', type: 'EdgeInsetsGeometry?', description: '外边距', example: 'EdgeInsets.symmetric(horizontal: 16.0)' },
      { name: 'decoration', type: 'Decoration?', description: '背景装饰（圆角、渐变、阴影等）', example: 'BoxDecoration(color: Colors.blue)' },
      { name: 'width', type: 'double?', description: '固定宽度' },
      { name: 'height', type: 'double?', description: '固定高度' },
      { name: 'constraints', type: 'BoxConstraints?', description: '额外的约束条件' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Container(
  width: 200,
  height: 100,
  margin: EdgeInsets.all(16),
  padding: EdgeInsets.all(8),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(12),
    boxShadow: [
      BoxShadow(color: Colors.black26, blurRadius: 8),
    ],
  ),
  child: Text('Hello'),
)`,
    tips: 'Container 是一个有状态的 Widget，当需要频繁更新时考虑使用 RepaintBoundary',
    relatedWidgets: ['SizedBox', 'ConstrainedBox', 'DecoratedBox'],
    preview: '<div class="preview-box" style="width:60px;height:40px;background:#bbdefb;border:2px solid #1976d2;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#1976d2">Container</div>',
    detailedDoc: {
      overview: 'Container 是 Flutter 中最常用的布局组件之一，它提供了一个便捷的 API 来组合各种约束和装饰。本质上，Container 是一个语法糖，内部组合了 Padding、DecoratedBox、ConstrainedBox 等多个组件。',
      useCases: [
        '需要添加边距、内边距的组件',
        '需要背景色、圆角、边框的组件',
        '需要固定宽高的组件',
        '需要对齐子组件的场景'
      ],
      commonPatterns: [
        { title: '居中内容', code: 'Container(alignment: Alignment.center, child: child)' },
        { title: '圆角卡片', code: 'Container(decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)), child: child)' },
        { title: '固定尺寸', code: 'Container(width: 100, height: 100, child: child)' }
      ],
      pitfalls: [
        '避免嵌套过多 Container，会导致性能问题',
        'Container 的 decoration 会创建新的图层，大量使用影响性能',
        '同时设置 width 和 constraints 时，constraints 优先级更高'
      ],
      performance: '中等。Container 内部会创建多个 RenderBox，简单场景可用 SizedBox、DecoratedBox 等替代以提升性能。'
    }
  },
  {
    id: 'text',
    name: 'Text',
    description: '用于显示文本的组件，支持丰富的样式设置',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'data', type: 'String', required: true, description: '要显示的文本内容' },
      { name: 'style', type: 'TextStyle?', description: '文本样式（字体、大小、颜色等）', example: 'TextStyle(fontSize: 16, color: Colors.black)' },
      { name: 'textAlign', type: 'TextAlign', description: '文本对齐方式', defaultValue: 'TextAlign.start', example: 'TextAlign.center' },
      { name: 'maxLines', type: 'int?', description: '最大行数，超出显示省略号', example: '2' },
      { name: 'overflow', type: 'TextOverflow', description: '文本溢出处理方式', defaultValue: 'TextOverflow.clip', example: 'TextOverflow.ellipsis' },
      { name: 'textScaleFactor', type: 'double?', description: '文本缩放比例' }
    ],
    usageExample: `Text(
  'Hello Flutter!',
  style: TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.blue,
    letterSpacing: 1.5,
  ),
  textAlign: TextAlign.center,
  maxLines: 2,
  overflow: TextOverflow.ellipsis,
)`,
    relatedWidgets: ['RichText', 'SelectableText', 'DefaultTextStyle'],
    preview: '<span style="font-size:16px;font-weight:bold;color:#1976d2">Flutter Text</span>',
    detailedDoc: {
      overview: 'Text 是 Flutter 中最基础的文本显示组件。它支持丰富的样式设置，包括字体、大小、颜色、字重、字间距等。Text 内部使用 RichText 和 TextSpan 来渲染文本。',
      useCases: [
        '显示标题、段落等静态文本',
        '显示带样式的文本（颜色、大小、字重）',
        '显示省略号截断的长文本',
        '显示可缩放的用户界面文本'
      ],
      commonPatterns: [
        { title: '粗体大字', code: 'Text(\'Title\', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold))' },
        { title: '省略号截断', code: 'Text(longText, maxLines: 2, overflow: TextOverflow.ellipsis)' },
        { title: '带颜色文本', code: 'Text(\'Hello\', style: TextStyle(color: Colors.blue))' },
        { title: '固定字间距', code: 'Text(\'ABC\', style: TextStyle(letterSpacing: 2.0))' }
      ],
      pitfalls: [
        'Text 默认不会自动换行，需要用 Flexible 或 ConstrainedBox 限制宽度',
        'maxLines 必须与 overflow 配合使用才能显示省略号',
        'TextStyle 是 immutable 的，频繁创建会影响性能，建议复用',
        '长文本渲染会影响性能，可使用 ListView.builder 优化'
      ],
      performance: '优秀。Text 是高度优化的组件，但大量文本（如长列表）建议使用 ListView.builder 懒加载。'
    }
  },
  {
    id: 'icon',
    name: 'Icon',
    description: '显示 Material 图标',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'icon', type: 'IconData', required: true, description: '图标数据', example: 'Icons.home' },
      { name: 'size', type: 'double?', description: '图标大小', example: '24.0' },
      { name: 'color', type: 'Color?', description: '图标颜色' },
      { name: 'shadows', type: 'List<Shadow>?', description: '阴影效果' }
    ],
    usageExample: `Icon(
  Icons.favorite,
  size: 32,
  color: Colors.red,
)`,
    relatedWidgets: ['IconButton', 'ImageIcon', 'CupertinoIcons'],
    preview: '<span style="font-size:32px;color:#d32f2f">❤️</span>',
    detailedDoc: {
      overview: 'Icon 用于显示 Material Icons 字体图标。Flutter 内置了完整的 Material Icons 图标库，也可使用 CupertinoIcons 显示 iOS 风格图标。',
      useCases: [
        '显示功能图标（搜索、设置、返回等）',
        '作为按钮的图标部分',
        '显示状态图标（成功、失败、警告）',
        '装饰性图标'
      ],
      commonPatterns: [
        { title: '带颜色图标', code: 'Icon(Icons.star, color: Colors.amber)' },
        { title: '自定义大小', code: 'Icon(Icons.home, size: 32)' },
        { title: '带阴影图标', code: 'Icon(Icons.cloud, shadows: [Shadow(blurRadius: 4)])' }
      ],
      pitfalls: [
        'Icon 默认大小是 24px，需要显式设置 size',
        '使用自定义图标字体时需要指定 fontFamily',
        '图标颜色受 TextStyle 影响，显式设置 color 更可靠'
      ],
      performance: '优秀。Icon 使用字体渲染，性能开销极小。'
    }
  },
  {
    id: 'image',
    name: 'Image',
    description: '显示图像的组件，支持多种图像源',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'image', type: 'ImageProvider', required: true, description: '图像提供者' },
      { name: 'width', type: 'double?', description: '图像宽度' },
      { name: 'height', type: 'double?', description: '图像高度' },
      { name: 'fit', type: 'BoxFit?', description: '图像填充方式', defaultValue: 'BoxFit.scaleDown' }
    ],
    usageExample: `Image.network(
  'https://example.com/image.jpg',
  width: 200,
  height: 150,
  fit: BoxFit.cover,
)`,
    relatedWidgets: ['FadeInImage', 'CircleAvatar', 'DecorationImage'],
    preview: '<div style="width:60px;height:40px;background:linear-gradient(45deg,#667eea,#764ba2);border-radius:6px;"></div>'
  },
  {
    id: 'row',
    name: 'Row',
    description: '水平方向排列子组件的线性布局',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'mainAxisAlignment', type: 'MainAxisAlignment', description: '主轴（水平）方向的对齐方式', defaultValue: 'MainAxisAlignment.start' },
      { name: 'mainAxisSize', type: 'MainAxisSize', description: '主轴方向的大小', defaultValue: 'MainAxisSize.max' },
      { name: 'crossAxisAlignment', type: 'CrossAxisAlignment', description: '交叉轴（垂直）方向的对齐方式', defaultValue: 'CrossAxisAlignment.center' },
      { name: 'children', type: 'List<Widget>', description: '子组件列表' }
    ],
    usageExample: `Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    Icon(Icons.menu),
    Text('Title'),
    Icon(Icons.more_vert),
  ],
)`,
    relatedWidgets: ['Column', 'Flex', 'Wrap'],
    preview: '<div class="preview-row"><div class="preview-box" style="background:#e57373"></div><div class="preview-box" style="background:#81c784"></div><div class="preview-box" style="background:#64b5f6"></div></div>',
    detailedDoc: {
      overview: 'Row 是水平方向排列子组件的线性布局组件。它是 Flex 的特例（direction: Axis.horizontal）。Row 不会自动换行，需要换行功能请使用 Wrap。',
      useCases: [
        '水平排列多个组件（按钮、图标、文本）',
        '创建顶部导航栏（菜单图标 + 标题 + 操作按钮）',
        '创建表单行（标签 + 输入框）',
        '创建底部工具栏'
      ],
      commonPatterns: [
        { title: '两端对齐', code: 'Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [start, end])' },
        { title: '居中排列', code: 'Row(mainAxisAlignment: MainAxisAlignment.center, children: [...])' },
        { title: '等间距排列', code: 'Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [...])' },
        { title: '带 Expanded', code: 'Row(children: [fixed, Expanded(child: flexible), fixed])' }
      ],
      pitfalls: [
        'Row 内的子组件如果有无限宽度（如 Expanded），会导致布局错误',
        'Row 不会自动换行，内容过多会溢出',
        '在 SingleChildScrollView 中使用 Row 需要设置 shrinkWrap: true',
        'mainAxisSize: MainAxisSize.min 可以让 Row 只占用子组件所需空间'
      ],
      performance: '优秀。Row 是轻量级布局组件，可以放心使用。但避免在 Row 内嵌套过多复杂组件。'
    }
  },
  {
    id: 'column',
    name: 'Column',
    description: '垂直方向排列子组件的线性布局',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'mainAxisAlignment', type: 'MainAxisAlignment', description: '主轴（垂直）方向的对齐方式', defaultValue: 'MainAxisAlignment.start' },
      { name: 'mainAxisSize', type: 'MainAxisSize', description: '主轴方向的大小', defaultValue: 'MainAxisSize.max' },
      { name: 'crossAxisAlignment', type: 'CrossAxisAlignment', description: '交叉轴（水平）方向的对齐方式', defaultValue: 'CrossAxisAlignment.center' },
      { name: 'children', type: 'List<Widget>', description: '子组件列表' }
    ],
    usageExample: `Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    Text('Header'),
    Expanded(child: Text('Content')),
    Text('Footer'),
  ],
)`,
    relatedWidgets: ['Row', 'Flex', 'ListView'],
    preview: '<div class="preview-col"><div class="preview-box" style="background:#e57373"></div><div class="preview-box" style="background:#81c784"></div><div class="preview-box" style="background:#64b5f6"></div></div>',
    detailedDoc: {
      overview: 'Column 是垂直方向排列子组件的线性布局组件。它是 Flex 的特例（direction: Axis.vertical）。Column 不会自动滚动，需要滚动请使用 ListView 或 SingleChildScrollView。',
      useCases: [
        '垂直排列多个组件（标题 + 内容 + 底部）',
        '创建表单（标签 + 输入框垂直排列）',
        '创建列表项（头像 + 标题 + 副标题）',
        '居中显示内容'
      ],
      commonPatterns: [
        { title: '垂直居中', code: 'Column(mainAxisAlignment: MainAxisAlignment.center, children: [...])' },
        { title: '两端对齐', code: 'Column(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [top, bottom])' },
        { title: '拉伸子组件', code: 'Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [...])' },
        { title: '带 Expanded', code: 'Column(children: [header, Expanded(child: content), footer])' }
      ],
      pitfalls: [
        'Column 内的子组件如果有无限高度（如 Expanded），会导致布局错误',
        'Column 不会自动滚动，内容过多会溢出',
        '在 Column 中使用 ListView 需要设置 shrinkWrap: true 和 physics: NeverScrollableScrollPhysics()',
        'Column 默认 crossAxisAlignment 是 center，不是 start'
      ],
      performance: '优秀。Column 是轻量级布局组件，但避免在可滚动组件内嵌套过深的 Column。'
    }
  },
  {
    id: 'stack',
    name: 'Stack',
    description: '层叠布局，允许子组件重叠放置',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'alignment', type: 'AlignmentGeometry', description: '子组件的对齐方式', defaultValue: 'AlignmentDirectional.topStart' },
      { name: 'fit', type: 'StackFit', description: '非定位子组件的适配方式', defaultValue: 'StackFit.loose' },
      { name: 'children', type: 'List<Widget>', description: '子组件列表' }
    ],
    usageExample: `Stack(
  alignment: Alignment.center,
  children: [
    Image.network('https://example.com/bg.jpg'),
    Positioned(
      top: 16,
      right: 16,
      child: Icon(Icons.favorite),
    ),
    Text('Overlay Text'),
  ],
)`,
    relatedWidgets: ['Positioned', 'IndexedStack', 'ZStack'],
    preview: '<div class="preview-stack"><div class="preview-box" style="width:60px;height:40px;background:#bbdefb"></div><div class="preview-box" style="width:30px;height:25px;background:#ef9a9a;top:8px;left:15px;opacity:0.8"></div></div>'
  },
  {
    id: 'expanded',
    name: 'Expanded',
    description: '扩展子组件以填充 Flex 布局的可用空间',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'flex', type: 'int', description: '弹性系数，决定占用空间比例', defaultValue: '1' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(color: Colors.red),
    ),
    Expanded(
      flex: 1,
      child: Container(color: Colors.blue),
    ),
  ],
)`,
    relatedWidgets: ['Flexible', 'Spacer', 'FittedBox'],
    preview: '<div class="preview-row" style="width:80px"><div class="preview-box" style="flex:2;background:#e57373"></div><div class="preview-box" style="flex:1;background:#64b5f6"></div></div>'
  },
  {
    id: 'listview',
    name: 'ListView',
    description: '可滚动的列表组件，支持动态加载',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.vertical' },
      { name: 'padding', type: 'EdgeInsetsGeometry?', description: '列表内边距' },
      { name: 'itemCount', type: 'int?', description: '列表项数量' },
      { name: 'itemBuilder', type: 'IndexedWidgetBuilder', description: '列表项构建器' }
    ],
    usageExample: `ListView.builder(
  itemCount: 100,
  itemBuilder: (context, index) {
    return ListTile(
      leading: CircleAvatar(child: Text('\${index}')),
      title: Text('Item \$index'),
    );
  },
)`,
    relatedWidgets: ['GridView', 'PageView', 'CustomScrollView'],
    preview: '<div style="display:flex;gap:4px;overflow:hidden"><div class="preview-box" style="background:#e57373;flex-shrink:0"></div><div class="preview-box" style="background:#81c784;flex-shrink:0"></div><div class="preview-box" style="background:#64b5f6;flex-shrink:0"></div><span style="font-size:10px;color:#999">...</span></div>'
  },
  {
    id: 'gridview',
    name: 'GridView',
    description: '网格布局的可滚动列表',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'gridDelegate', type: 'SliverGridDelegate', description: '网格代理，控制网格布局' },
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.vertical' },
      { name: 'itemCount', type: 'int?', description: '列表项数量' },
      { name: 'itemBuilder', type: 'IndexedWidgetBuilder', description: '列表项构建器' }
    ],
    usageExample: `GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
  ),
  itemCount: 20,
  itemBuilder: (context, index) {
    return Card(child: Center(child: Text('Item \$index')));
  },
)`,
    relatedWidgets: ['ListView', 'GridView.count', 'GridView.extent'],
    preview: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;width:60px"><div class="preview-box" style="background:#e57373"></div><div class="preview-box" style="background:#81c784"></div><div class="preview-box" style="background:#64b5f6"></div><div class="preview-box" style="background:#ffd54f"></div></div>'
  },
  {
    id: 'sizedbox',
    name: 'SizedBox',
    description: '固定尺寸的盒子，常用于添加间距',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'width', type: 'double?', description: '宽度' },
      { name: 'height', type: 'double?', description: '高度' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Row(
  children: [
    Icon(Icons.home),
    SizedBox(width: 16), // 间距
    Text('Title'),
  ],
)`,
    relatedWidgets: ['Container', 'Spacer', 'FractionallySizedBox'],
    preview: '<div class="preview-row"><div class="preview-box" style="background:#64b5f6"></div><div style="width:12px"></div><div class="preview-box" style="background:#e57373"></div></div>'
  },
  {
    id: 'scaffold',
    name: 'Scaffold',
    description: 'Material Design 的基本结构框架，提供标准视觉布局结构',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'appBar', type: 'PreferredSizeWidget?', description: '顶部应用栏' },
      { name: 'body', type: 'Widget?', description: '主要内容区域' },
      { name: 'floatingActionButton', type: 'Widget?', description: '浮动操作按钮' },
      { name: 'drawer', type: 'Widget?', description: '侧边抽屉菜单' },
      { name: 'bottomNavigationBar', type: 'Widget?', description: '底部导航栏' }
    ],
    usageExample: `Scaffold(
  appBar: AppBar(title: Text('My App')),
  body: Center(child: Text('Hello')),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
)`,
    relatedWidgets: ['AppBar', 'FloatingActionButton', 'BottomNavigationBar'],
    preview: '<div style="width:80px;height:50px;border:1px solid #ddd;border-radius:4px;overflow:hidden"><div style="height:12px;background:#1976d2"></div><div style="flex:1;display:flex;align-items:center;justify-content:center;font-size:8px">Body</div></div>'
  },
  {
    id: 'appbar',
    name: 'AppBar',
    description: 'Material Design 应用栏，显示在页面顶部',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'title', type: 'Widget?', description: '标题组件' },
      { name: 'leading', type: 'Widget?', description: '前导组件' },
      { name: 'actions', type: 'List<Widget>?', description: '右侧操作按钮列表' },
      { name: 'backgroundColor', type: 'Color?', description: '背景颜色' },
      { name: 'elevation', type: 'double?', description: '阴影高度' }
    ],
    usageExample: `AppBar(
  title: Text('Title'),
  leading: IconButton(icon: Icon(Icons.menu), onPressed: () {}),
  actions: [
    IconButton(icon: Icon(Icons.search), onPressed: () {}),
  ],
)`,
    relatedWidgets: ['SliverAppBar', 'TabBar', 'Toolbar'],
    preview: '<div style="width:80px;height:24px;background:#1976d2;border-radius:4px 4px 0 0;display:flex;align-items:center;padding:0 4px"><span style="color:white;font-size:8px;flex:1">Title</span><span style="color:white;font-size:10px">⋮</span></div>'
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Material Design 卡片，带有圆角和阴影',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'elevation', type: 'double?', description: '阴影高度', defaultValue: '1.0' },
      { name: 'shape', type: 'ShapeBorder?', description: '卡片形状' },
      { name: 'color', type: 'Color?', description: '卡片颜色' }
    ],
    usageExample: `Card(
  elevation: 4,
  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
  child: Column(
    children: [
      Image.network('https://example.com/image.jpg'),
      ListTile(title: Text('Title')),
    ],
  ),
)`,
    relatedWidgets: ['ListTile', 'Container', 'Material'],
    preview: '<div class="preview-card"><div style="display:flex;align-items:center;gap:6px"><div style="width:20px;height:20px;background:#1976d2;border-radius:50%;color:white;font-size:10px;display:flex;align-items:center;justify-content:center">A</div><span style="font-size:10px;font-weight:600">Card Title</span></div></div>'
  },
  {
    id: 'button',
    name: 'ElevatedButton',
    description: 'Material Design 凸起按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', required: true, description: '点击回调' },
      { name: 'child', type: 'Widget', required: true, description: '按钮内容' },
      { name: 'style', type: 'ButtonStyle?', description: '按钮样式' }
    ],
    usageExample: `ElevatedButton(
  onPressed: () {
    print('Button pressed!');
  },
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
  ),
  child: Text('Click Me'),
)`,
    relatedWidgets: ['TextButton', 'OutlinedButton', 'IconButton'],
    preview: '<button class="preview-button">Button</button>'
  },
  {
    id: 'textfield',
    name: 'TextField',
    description: 'Material Design 文本输入框',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'controller', type: 'TextEditingController?', description: '文本控制器' },
      { name: 'decoration', type: 'InputDecoration?', description: '输入框装饰' },
      { name: 'keyboardType', type: 'TextInputType?', description: '键盘类型' },
      { name: 'obscureText', type: 'bool', description: '是否隐藏文本', defaultValue: 'false' },
      { name: 'onChanged', type: 'ValueChanged<String>?', description: '文本变化回调' }
    ],
    usageExample: `TextField(
  decoration: InputDecoration(
    labelText: 'Email',
    hintText: 'Enter your email',
    prefixIcon: Icon(Icons.email),
    border: OutlineInputBorder(),
  ),
  keyboardType: TextInputType.emailAddress,
)`,
    relatedWidgets: ['TextFormField', 'InputDecorator', 'EditableText'],
    preview: '<input class="preview-input" placeholder="Input...">'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: '复选框组件',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'bool?', required: true, description: '选中状态' },
      { name: 'onChanged', type: 'ValueChanged<bool?>', required: true, description: '状态变化回调' },
      { name: 'activeColor', type: 'Color?', description: '选中时的颜色' }
    ],
    usageExample: `Checkbox(
  value: _isChecked,
  onChanged: (value) {
    setState(() => _isChecked = value);
  },
  activeColor: Colors.green,
)`,
    relatedWidgets: ['CheckboxListTile', 'Switch', 'Radio'],
    preview: '<span style="display:inline-block;width:18px;height:18px;background:#4caf50;border-radius:3px;text-align:center;line-height:16px;color:white;font-size:12px">✓</span>'
  },
  {
    id: 'switch',
    name: 'Switch',
    description: '开关组件',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'bool', required: true, description: '开关状态' },
      { name: 'onChanged', type: 'ValueChanged<bool>', required: true, description: '状态变化回调' },
      { name: 'activeColor', type: 'Color?', description: '打开时的颜色' }
    ],
    usageExample: `Switch(
  value: _isOn,
  onChanged: (value) {
    setState(() => _isOn = value);
  },
  activeColor: Colors.green,
)`,
    relatedWidgets: ['SwitchListTile', 'Checkbox', 'ToggleButtons'],
    preview: '<span style="display:inline-block;width:36px;height:20px;background:#4caf50;border-radius:10px;position:relative"><span style="position:absolute;right:2px;top:2px;width:16px;height:16px;background:white;border-radius:50%"></span></span>'
  },
  {
    id: 'circularprogress',
    name: 'CircularProgressIndicator',
    description: '圆形进度指示器',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'double?', description: '进度值（0.0 - 1.0）' },
      { name: 'backgroundColor', type: 'Color?', description: '背景颜色' },
      { name: 'color', type: 'Color?', description: '进度颜色' },
      { name: 'strokeWidth', type: 'double', description: '进度条宽度', defaultValue: '4.0' }
    ],
    usageExample: `CircularProgressIndicator(
  value: 0.7,
  backgroundColor: Colors.grey[300],
  color: Colors.blue,
)`,
    relatedWidgets: ['LinearProgressIndicator', 'RefreshIndicator'],
    preview: '<span style="display:inline-block;width:24px;height:24px;border:3px solid #e0e0e0;border-top-color:#1976d2;border-radius:50%"></span>'
  },
  {
    id: 'tabbar',
    name: 'TabBar',
    description: 'Material Design 标签页导航栏',
    category: 'navigation',
    categoryDisplay: '导航',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'tabs', type: 'List<Widget>', required: true, description: '标签列表' },
      { name: 'controller', type: 'TabController?', description: '标签控制器' },
      { name: 'isScrollable', type: 'bool', description: '是否可滚动', defaultValue: 'false' },
      { name: 'indicatorColor', type: 'Color?', description: '指示器颜色' }
    ],
    usageExample: `TabBar(
  tabs: [
    Tab(icon: Icon(Icons.home), text: 'Home'),
    Tab(icon: Icon(Icons.search), text: 'Search'),
    Tab(icon: Icon(Icons.person), text: 'Profile'),
  ],
)`,
    relatedWidgets: ['TabBarView', 'DefaultTabController', 'TabPageSelector'],
    preview: '<div style="display:flex;border-bottom:2px solid #1976d2"><span style="padding:4px 8px;font-size:10px;border-bottom:2px solid #1976d2;margin-bottom:-2px">Tab 1</span><span style="padding:4px 8px;font-size:10px;color:#999">Tab 2</span></div>'
  },
  {
    id: 'bottomnav',
    name: 'BottomNavigationBar',
    description: '底部导航栏，用于在主要功能间切换',
    category: 'navigation',
    categoryDisplay: '导航',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'items', type: 'List<BottomNavigationBarItem>', required: true, description: '导航项列表' },
      { name: 'currentIndex', type: 'int', required: true, description: '当前选中项索引' },
      { name: 'onTap', type: 'ValueChanged<int>?', description: '点击回调' },
      { name: 'type', type: 'BottomNavigationBarType?', description: '导航栏类型' }
    ],
    usageExample: `BottomNavigationBar(
  items: [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
    BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
    BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
  ],
  currentIndex: 0,
  onTap: (index) => setState(() => _currentIndex = index),
)`,
    relatedWidgets: ['NavigationBar', 'BottomAppBar', 'TabBar'],
    preview: '<div style="display:flex;justify-content:space-around;padding:4px;background:#fff;border-top:1px solid #eee"><span style="font-size:16px;color:#1976d2">🏠</span><span style="font-size:16px;color:#999">🔍</span><span style="font-size:16px;color:#999">👤</span></div>'
  },
  {
    id: 'animatedcontainer',
    name: 'AnimatedContainer',
    description: '自动动画版本的 Container，当属性变化时自动过渡',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'duration', type: 'Duration', required: true, description: '动画持续时间' },
      { name: 'curve', type: 'Curve', description: '动画曲线', defaultValue: 'Curves.linear' },
      { name: 'width', type: 'double?', description: '宽度（可动画）' },
      { name: 'height', type: 'double?', description: '高度（可动画）' },
      { name: 'decoration', type: 'Decoration?', description: '装饰（可动画）' }
    ],
    usageExample: `AnimatedContainer(
  duration: Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  width: _selected ? 200 : 100,
  height: _selected ? 200 : 100,
  decoration: BoxDecoration(
    color: _selected ? Colors.blue : Colors.red,
    borderRadius: _selected ? 50 : 0,
  ),
)`,
    relatedWidgets: ['AnimatedOpacity', 'AnimatedRotation', 'AnimatedScale'],
    preview: '<div style="width:40px;height:40px;background:#64b5f6;border-radius:8px;animation:pulse 1s infinite"></div><style>@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}</style>'
  },
  {
    id: 'dialog',
    name: 'AlertDialog',
    description: 'Material Design 警告对话框',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'title', type: 'Widget?', description: '标题' },
      { name: 'content', type: 'Widget?', description: '内容' },
      { name: 'actions', type: 'List<Widget>?', description: '操作按钮列表' },
      { name: 'shape', type: 'ShapeBorder?', description: '对话框形状' }
    ],
    usageExample: `AlertDialog(
  title: Text('Confirm'),
  content: Text('Are you sure?'),
  actions: [
    TextButton(onPressed: () => Navigator.pop(context), child: Text('Cancel')),
    ElevatedButton(onPressed: () => Navigator.pop(context, true), child: Text('OK')),
  ],
)`,
    relatedWidgets: ['SimpleDialog', 'Dialog', 'showDialog'],
    preview: '<div style="background:white;padding:12px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:120px"><div style="font-weight:600;font-size:11px;margin-bottom:6px">Confirm</div><div style="display:flex;gap:4px;justify-content:flex-end"><span style="font-size:9px;color:#1976d2">Cancel</span><span style="font-size:9px;background:#1976d2;color:white;padding:2px 6px;border-radius:4px">OK</span></div></div>'
  },
  {
    id: 'snackbar',
    name: 'SnackBar',
    description: '轻量级反馈提示，显示在屏幕底部',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'content', type: 'Widget', required: true, description: '提示内容' },
      { name: 'duration', type: 'Duration', description: '显示时长', defaultValue: '4 秒' },
      { name: 'action', type: 'SnackBarAction?', description: '操作按钮' }
    ],
    usageExample: `SnackBar(
  content: Text('Operation completed!'),
  duration: Duration(seconds: 2),
  action: SnackBarAction(
    label: 'Undo',
    onPressed: () {},
  ),
)`,
    relatedWidgets: ['ScaffoldMessenger', 'MaterialBanner'],
    preview: '<div style="background:#323232;color:white;padding:8px 12px;border-radius:4px;font-size:10px;display:inline-block">Operation completed! 🔄 Undo</div>'
  },
  {
    id: 'slider',
    name: 'Slider',
    description: '滑动选择器',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'double', required: true, description: '当前值' },
      { name: 'min', type: 'double', description: '最小值', defaultValue: '0.0' },
      { name: 'max', type: 'double', description: '最大值', defaultValue: '1.0' },
      { name: 'divisions', type: 'int?', description: '分段数' },
      { name: 'onChanged', type: 'ValueChanged<double>?', required: true, description: '值变化回调' }
    ],
    usageExample: `Slider(
  value: 0.6,
  min: 0,
  max: 100,
  divisions: 10,
  label: '\${value.round()}',
  onChanged: (value) => setState(() => _value = value),
)`,
    relatedWidgets: ['RangeSlider', 'SliderTheme'],
    preview: '<div class="preview-slider" style="position:relative;height:4px;background:#e0e0e0;border-radius:2px"><div style="position:absolute;left:60%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;background:#1976d2;border-radius:50%"></div></div>'
  },
  {
    id: 'dropdownbutton',
    name: 'DropdownButton',
    description: '下拉选择按钮',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'T?', required: true, description: '当前选中值' },
      { name: 'items', type: 'List<DropdownMenuItem<T>>?', required: true, description: '下拉选项列表' },
      { name: 'onChanged', type: 'ValueChanged<T?>?', required: true, description: '选中变化回调' },
      { name: 'isExpanded', type: 'bool', description: '是否占满宽度', defaultValue: 'false' }
    ],
    usageExample: `DropdownButton<String>(
  value: _selectedValue,
  isExpanded: true,
  items: [
    DropdownMenuItem(value: 'A', child: Text('Option A')),
    DropdownMenuItem(value: 'B', child: Text('Option B')),
  ],
  onChanged: (value) => setState(() => _selectedValue = value),
)`,
    relatedWidgets: ['DropdownButtonFormField', 'PopupMenuButton'],
    preview: '<div style="border:1px solid #ddd;padding:6px 10px;border-radius:4px;font-size:11px;display:flex;justify-content:space-between;align-items:center;min-width:80px"><span>Option A</span><span>▼</span></div>'
  },
  {
    id: 'chip',
    name: 'Chip',
    description: 'Material Design 芯片标签',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'label', type: 'Widget', required: true, description: '标签内容' },
      { name: 'avatar', type: 'Widget?', description: '头像组件' },
      { name: 'deleteIcon', type: 'Widget?', description: '删除图标' },
      { name: 'onDeleted', type: 'VoidCallback?', description: '删除回调' }
    ],
    usageExample: `Chip(
  label: Text('Tag'),
  avatar: CircleAvatar(child: Text('A')),
  onDeleted: () => print('Deleted!'),
)`,
    relatedWidgets: ['ActionChip', 'InputChip', 'FilterChip'],
    preview: '<span class="preview-chip"><span style="display:inline-block;width:14px;height:14px;background:#1976d2;border-radius:50%;color:white;font-size:8px;text-align:center;line-height:14px;margin-right:4px">A</span>Chip</span>'
  },
  {
    id: 'avatar',
    name: 'CircleAvatar',
    description: '圆形头像组件',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'radius', type: 'double?', description: '半径' },
      { name: 'backgroundColor', type: 'Color?', description: '背景颜色' },
      { name: 'backgroundImage', type: 'ImageProvider?', description: '背景图片' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `CircleAvatar(
  radius: 30,
  backgroundColor: Colors.blue,
  child: Text('A', style: TextStyle(color: Colors.white, fontSize: 24)),
)`,
    relatedWidgets: ['Avatar', 'CircleAvatar.backgroundImage'],
    preview: '<span style="display:inline-block;width:32px;height:32px;background:#1976d2;border-radius:50%;color:white;text-align:center;line-height:32px;font-size:14px;font-weight:bold">A</span>'
  },
  {
    id: 'expansiontile',
    name: 'ExpansionTile',
    description: '可展开折叠的列表项',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'title', type: 'Widget', required: true, description: '标题' },
      { name: 'subtitle', type: 'Widget?', description: '副标题' },
      { name: 'children', type: 'List<Widget>', description: '展开后显示的子组件' },
      { name: 'initiallyExpanded', type: 'bool', description: '是否初始展开', defaultValue: 'false' }
    ],
    usageExample: `ExpansionTile(
  title: Text('Settings'),
  subtitle: Text('Tap to expand'),
  children: [
    ListTile(title: Text('Option 1')),
    ListTile(title: Text('Option 2')),
  ],
)`,
    relatedWidgets: ['ExpansionPanel', 'ListTile'],
    preview: '<div style="width:100px"><div style="display:flex;justify-content:space-between;font-size:10px;padding:4px;border-bottom:1px solid #eee"><span>Settings</span><span>▼</span></div><div style="font-size:9px;color:#666;padding:4px 0 4px 12px">Option 1</div></div>'
  },
  {
    id: 'divider',
    name: 'Divider',
    description: '水平分割线',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'height', type: 'double?', description: '分割线高度', defaultValue: '16.0' },
      { name: 'thickness', type: 'double?', description: '线条粗细', defaultValue: '1.0' },
      { name: 'indent', type: 'double?', description: '左侧缩进' },
      { name: 'color', type: 'Color?', description: '线条颜色' }
    ],
    usageExample: `Column(
  children: [
    ListTile(title: Text('Item 1')),
    Divider(height: 1, thickness: 1),
    ListTile(title: Text('Item 2')),
  ],
)`,
    relatedWidgets: ['VerticalDivider', 'ListTile'],
    preview: '<div style="width:80px;height:16px;display:flex;align-items:center"><div style="height:1px;background:#e0e0e0;flex:1"></div></div>'
  },
  {
    id: 'visibility',
    name: 'Visibility',
    description: '控制子组件显示/隐藏的 Widget',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'visible', type: 'bool', required: true, description: '是否显示子组件' },
      { name: 'replacement', type: 'Widget?', description: '隐藏时显示的替代组件' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `Visibility(
  visible: _isVisible,
  replacement: Text('Hidden'),
  child: Text('Visible'),
)`,
    relatedWidgets: ['Offstage', 'Opacity'],
    preview: '<span style="display:inline-block;padding:4px 8px;background:#4caf50;color:white;border-radius:4px;font-size:10px">Visible</span>'
  },
  {
    id: 'gestureDetector',
    name: 'GestureDetector',
    description: '手势检测器，响应各种手势',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onTap', type: 'GestureTapCallback?', description: '点击回调' },
      { name: 'onDoubleTap', type: 'GestureTapCallback?', description: '双击回调' },
      { name: 'onLongPress', type: 'GestureLongPressCallback?', description: '长按回调' },
      { name: 'onPanUpdate', type: 'GestureDragUpdateCallback?', description: '拖拽更新回调' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `GestureDetector(
  onTap: () => print('Tap'),
  onDoubleTap: () => print('Double tap'),
  onLongPress: () => print('Long press'),
  child: Container(
    color: Colors.blue,
    child: Text('Gesture Area'),
  ),
)`,
    relatedWidgets: ['InkWell', 'Listener'],
    preview: '<div style="padding:8px 12px;background:#1976d2;color:white;border-radius:6px;font-size:10px;cursor:pointer">👆 Tap</div>'
  },
  {
    id: 'streambuilder',
    name: 'StreamBuilder',
    description: '监听 Stream 数据流并重建 UI',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'stream', type: 'Stream<T>?', required: true, description: '数据流' },
      { name: 'builder', type: 'Widget Function(BuildContext, AsyncSnapshot<T>)', required: true, description: '构建器函数' }
    ],
    usageExample: `StreamBuilder<int>(
  stream: Stream.periodic(Duration(seconds: 1), (x) => x),
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return Text('Value: \${snapshot.data}');
    }
    return CircularProgressIndicator();
  },
)`,
    relatedWidgets: ['FutureBuilder', 'ValueListenableBuilder'],
    preview: '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:10px">Stream:</span><span style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;font-size:10px">📡 Listening</span></div>'
  },
  {
    id: 'futurebuilder',
    name: 'FutureBuilder',
    description: '监听 Future 结果并重建 UI',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'future', type: 'Future<T>?', required: true, description: '异步任务' },
      { name: 'builder', type: 'Widget Function(BuildContext, AsyncSnapshot<T>)', required: true, description: '构建器函数' }
    ],
    usageExample: `FutureBuilder<String>(
  future: fetchData(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    }
    if (snapshot.hasError) {
      return Text('Error: \${snapshot.error}');
    }
    return Text('Data: \${snapshot.data}');
  },
)`,
    relatedWidgets: ['StreamBuilder', 'AsyncSnapshot'],
    preview: '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:10px">Future:</span><span style="background:#e3f2fd;color:#1565c0;padding:2px 6px;border-radius:4px;font-size:10px">⏳ Loading</span></div>'
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: '显示提示信息的 Widget',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'message', type: 'String', required: true, description: '提示消息' },
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'duration', type: 'Duration', description: '显示时长', defaultValue: '1.5 秒' }
    ],
    usageExample: `Tooltip(
  message: 'This is a helpful tip!',
  child: Icon(Icons.info_outline),
)`,
    relatedWidgets: ['TooltipTheme', 'LongPressDraggable'],
    preview: '<div style="position:relative;display:inline-block"><span style="font-size:16px">ℹ️</span><div style="position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background:#323232;color:white;padding:4px 8px;border-radius:4px;font-size:8px;white-space:nowrap">Helpful tip!</div></div>'
  },
  {
    id: 'linearprogressindicator',
    name: 'LinearProgressIndicator',
    description: '线性进度指示器',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'double?', description: '进度值（0.0-1.0）' },
      { name: 'backgroundColor', type: 'Color?', description: '背景颜色' },
      { name: 'color', type: 'Color?', description: '进度颜色' }
    ],
    usageExample: `LinearProgressIndicator(
  value: 0.6,
  backgroundColor: Colors.grey[300],
  color: Colors.blue,
)`,
    relatedWidgets: ['CircularProgressIndicator', 'RefreshIndicator'],
    preview: '<div style="width:80px;height:4px;background:#e0e0e0;border-radius:2px;overflow:hidden"><div style="width:60%;height:100%;background:#1976d2"></div></div>'
  },
  {
    id: 'flexible',
    name: 'Flexible',
    description: '控制子组件在 Flex 布局中如何填充可用空间',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'flex', type: 'int', description: '弹性系数', defaultValue: '1' },
      { name: 'fit', type: 'FlexFit', description: '如何填充空间', defaultValue: 'FlexFit.loose' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `Row(
  children: [
    Flexible(
      flex: 2,
      fit: FlexFit.tight,
      child: Text('Takes more space'),
    ),
    Flexible(
      flex: 1,
      child: Text('Takes less space'),
    ),
  ],
)`,
    relatedWidgets: ['Expanded', 'Spacer'],
    preview: '<div style="display:flex;gap:2px;width:80px"><div style="flex:2;height:20px;background:#81c784"></div><div style="flex:1;height:20px;background:#ffd54f"></div></div>'
  },
  {
    id: 'aspectratio',
    name: 'AspectRatio',
    description: '保持子组件的宽高比',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'aspectRatio', type: 'double', required: true, description: '宽高比（宽/高）' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `AspectRatio(
  aspectRatio: 16 / 9,
  child: Container(color: Colors.blue),
)`,
    relatedWidgets: ['FittedBox', 'LayoutBuilder'],
    preview: '<div style="width:64px;height:36px;background:#00acc1;border-radius:2px"></div>'
  },
  {
    id: 'singlechildscrollview',
    name: 'SingleChildScrollView',
    description: '可滚动的单个子组件容器',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.vertical' },
      { name: 'padding', type: 'EdgeInsetsGeometry?', description: '内边距' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `SingleChildScrollView(
  padding: EdgeInsets.all(16),
  child: Column(
    children: [
      Text('Long content...'),
      // 更多内容
    ],
  ),
)`,
    relatedWidgets: ['ListView', 'CustomScrollView'],
    preview: '<div style="display:flex;gap:4px;overflow:hidden;position:relative"><div style="display:flex;gap:4px"><div class="preview-box" style="background:#e57373;flex-shrink:0"></div><div class="preview-box" style="background:#81c784;flex-shrink:0"></div><div class="preview-box" style="background:#64b5f6;flex-shrink:0"></div></div><div style="position:absolute;right:0;top:0;bottom:0;width:12px;background:linear-gradient(to right,transparent,#fff);border-radius:4px"></div></div>'
  },
  {
    id: 'pageview',
    name: 'PageView',
    description: '可分页滚动的列表',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.horizontal' },
      { name: 'controller', type: 'PageController?', description: '页面控制器' },
      { name: 'pageSnapping', type: 'bool', description: '是否启用页面吸附效果', defaultValue: 'true' },
      { name: 'onPageChanged', type: 'Function(int)?', description: '页面变化回调' }
    ],
    usageExample: `PageView(
  onPageChanged: (index) => print('Page: \$index'),
  children: [
    Container(color: Colors.red),
    Container(color: Colors.green),
    Container(color: Colors.blue),
  ],
)`,
    relatedWidgets: ['PageController', 'ListView'],
    preview: '<div style="display:flex;overflow:hidden;width:70px;height:40px;position:relative"><div style="display:flex;transition:transform 0.3s"><div style="min-width:70px;height:40px;background:#e57373"></div><div style="min-width:70px;height:40px;background:#81c784"></div></div><div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);display:flex;gap:4px"><span style="width:6px;height:6px;background:#e57373;border-radius:50%"></span><span style="width:6px;height:6px;background:#ddd;border-radius:50%"></span></div></div>'
  },
  {
    id: 'listtile',
    name: 'ListTile',
    description: 'Material Design 列表项',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'leading', type: 'Widget?', description: '前导组件（头像、图标）' },
      { name: 'title', type: 'Widget?', description: '标题' },
      { name: 'subtitle', type: 'Widget?', description: '副标题' },
      { name: 'trailing', type: 'Widget?', description: '尾部组件' },
      { name: 'onTap', type: 'VoidCallback?', description: '点击回调' }
    ],
    usageExample: `ListTile(
  leading: CircleAvatar(child: Text('A')),
  title: Text('Title'),
  subtitle: Text('Subtitle'),
  trailing: Icon(Icons.chevron_right),
  onTap: () => print('Tapped!'),
)`,
    relatedWidgets: ['ListTileTheme', 'CheckboxListTile', 'SwitchListTile'],
    preview: '<div class="preview-card" style="padding:8px"><div style="display:flex;align-items:center;gap:8px"><div style="width:24px;height:24px;background:#1976d2;border-radius:50%;color:white;font-size:10px;display:flex;align-items:center;justify-content:center">A</div><div style="flex:1"><div style="font-size:9px;font-weight:600">Title</div><div style="font-size:8px;color:#999">Subtitle</div></div><span style="color:#999">›</span></div></div>'
  },
  {
    id: 'floatingactionbutton',
    name: 'FloatingActionButton',
    description: 'Material Design 浮动操作按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', required: true, description: '点击回调' },
      { name: 'child', type: 'Widget', required: true, description: '按钮内容' },
      { name: 'backgroundColor', type: 'Color?', description: '背景颜色' },
      { name: 'mini', type: 'bool', description: '是否迷你尺寸', defaultValue: 'false' }
    ],
    usageExample: `FloatingActionButton(
  onPressed: () {},
  backgroundColor: Colors.blue,
  child: Icon(Icons.add),
)`,
    relatedWidgets: ['FloatingActionButton.extended', 'SpeedDial'],
    preview: '<span style="display:inline-flex;width:36px;height:36px;background:#1976d2;border-radius:18px;color:white;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 8px rgba(25,118,210,0.4)">+</span>'
  },
  {
    id: 'iconbutton',
    name: 'IconButton',
    description: 'Material Design 图标按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'icon', type: 'Widget', required: true, description: '图标' },
      { name: 'onPressed', type: 'VoidCallback?', required: true, description: '点击回调' },
      { name: 'color', type: 'Color?', description: '图标颜色' },
      { name: 'iconSize', type: 'double?', description: '图标大小' }
    ],
    usageExample: `IconButton(
  icon: Icon(Icons.favorite),
  onPressed: () => print('Favorite!'),
  color: Colors.red,
  iconSize: 32,
)`,
    relatedWidgets: ['Icon', 'ToggleButtons'],
    preview: '<span style="display:inline-flex;width:32px;height:32px;align-items:center;justify-content:center;color:#d32f2f;font-size:20px;cursor:pointer">❤️</span>'
  },
  {
    id: 'popupmenubutton',
    name: 'PopupMenuButton',
    description: 'Material Design 弹出菜单按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'itemBuilder', type: 'Function(BuildContext)', required: true, description: '菜单项构建器' },
      { name: 'onSelected', type: 'Function(dynamic)?', description: '选中回调' },
      { name: 'icon', type: 'Widget?', description: '按钮图标' }
    ],
    usageExample: `PopupMenuButton<String>(
  onSelected: (value) => print('Selected: \$value'),
  itemBuilder: (context) => [
    PopupMenuItem(value: 'edit', child: Text('Edit')),
    PopupMenuItem(value: 'delete', child: Text('Delete')),
  ],
)`,
    relatedWidgets: ['PopupMenuButton', 'DropdownButton'],
    preview: '<div style="display:flex;align-items:center;gap:4px;font-size:12px;color:#666"><span>Menu</span><span>⋮</span></div>'
  },
  {
    id: 'radio',
    name: 'Radio',
    description: '单选按钮',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'value', type: 'T', required: true, description: '此按钮的值' },
      { name: 'groupValue', type: 'T?', required: true, description: '当前选中组的值' },
      { name: 'onChanged', type: 'ValueChanged<T>?', required: true, description: '选中变化回调' }
    ],
    usageExample: `Radio<String>(
  value: \'Option 1\',
  groupValue: _selectedValue,
  onChanged: (value) => setState(() => _selectedValue = value),
)`,
    relatedWidgets: ['RadioListTile', 'ToggleButtons'],
    preview: '<div style="display:flex;gap:8px"><span style="display:inline-block;width:18px;height:18px;border:2px solid #1976d2;border-radius:50%;position:relative"><span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;background:#1976d2;border-radius:50%"></span></span><span style="display:inline-block;width:18px;height:18px;border:2px solid #999;border-radius:50%"></span></div>'
  },
  {
    id: 'form',
    name: 'Form',
    description: '表单容器，用于组合和验证多个表单字段',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'key', type: 'GlobalKey<FormState>', description: '用于访问表单状态的 GlobalKey' },
      { name: 'child', type: 'Widget', required: true, description: '表单子组件' },
      { name: 'onChanged', type: 'VoidCallback?', description: '表单变化回调' },
      { name: 'autovalidateMode', type: 'AutovalidateMode?', description: '自动验证模式' }
    ],
    usageExample: `final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        validator: (value) => value?.isEmpty ?? true ? "Required" : null,
      ),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate()) {
            // 提交表单
          }
        },
        child: Text('Submit'),
      ),
    ],
  ),
)`,
    relatedWidgets: ['TextFormField', 'FormState'],
    preview: '<div style="display:flex;flex-direction:column;gap:6px;width:100px"><input class="preview-input" placeholder="Name" style="width:100%"><button class="preview-button" style="width:100%">Submit</button></div>'
  },
  {
    id: 'tabbarview',
    name: 'TabBarView',
    description: '与 TabBar 配合使用的标签页视图',
    category: 'navigation',
    categoryDisplay: '导航',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'children', type: 'List<Widget>', required: true, description: '标签页内容列表' },
      { name: 'controller', type: 'TabController?', description: '标签控制器' },
      { name: 'onPageChanged', type: 'Function(int)?', description: '页面变化回调' }
    ],
    usageExample: `TabBarView(
  controller: _tabController,
  children: [
    Center(child: Text('Home Tab')),
    Center(child: Text('Search Tab')),
    Center(child: Text('Profile Tab')),
  ],
)`,
    relatedWidgets: ['TabBar', 'DefaultTabController'],
    preview: '<div style="width:80px;height:40px;background:#e8f0fe;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#1976d2">Tab Content</div>'
  },
  {
    id: 'defaulttabcontroller',
    name: 'DefaultTabController',
    description: '为 TabBar 和 TabBarView 提供默认控制器',
    category: 'navigation',
    categoryDisplay: '导航',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'length', type: 'int', required: true, description: '标签数量' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `DefaultTabController(
  length: 3,
  child: Scaffold(
    appBar: AppBar(
      bottom: TabBar(tabs: [...}),
    ),
    body: TabBarView(children: [...}),
  ),
)`,
    relatedWidgets: ['TabController', 'TabBar'],
    preview: '<div style="width:80px"><div style="display:flex;border-bottom:2px solid #1976d2"><span style="padding:4px 6px;font-size:9px;border-bottom:2px solid #1976d2;margin-bottom:-2px">A</span><span style="padding:4px 6px;font-size:9px;color:#999">B</span></div><div style="height:24px;background:#e8f0fe;display:flex;align-items:center;justify-content:center;font-size:8px">Content</div></div>'
  },
  {
    id: 'animatedopacity',
    name: 'AnimatedOpacity',
    description: '透明度动画组件',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'opacity', type: 'double', required: true, description: '透明度（0.0 - 1.0）' },
      { name: 'duration', type: 'Duration', required: true, description: '动画持续时间' },
      { name: 'curve', type: 'Curve', description: '动画曲线', defaultValue: 'Curves.linear' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `AnimatedOpacity(
  opacity: _visible ? 1.0 : 0.0,
  duration: Duration(milliseconds: 500),
  curve: Curves.easeInOut,
  child: Text('Fade in/out'),
)`,
    relatedWidgets: ['FadeTransition', 'AnimatedContainer', 'Visibility'],
    preview: '<div style="width:50px;height:30px;background:#81c784;opacity:0.6;border-radius:4px"></div>'
  },
  {
    id: 'hero',
    name: 'Hero',
    description: '页面切换时的共享元素动画',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'tag', type: 'Object', required: true, description: '共享元素的标签' },
      { name: 'child', type: 'Widget', required: true, description: '要动画的子组件' }
    ],
    usageExample: `// 页面 A 和 B 使用相同 tag
Hero(
  tag: \'hero-tag\',
  child: Image.network(\'https://example.com/image.jpg\'),
)`,
    relatedWidgets: ['HeroMode', 'HeroFlight'],
    preview: '<div style="width:40px;height:40px;background:linear-gradient(45deg,#ec407a,#ab47bc);border-radius:20px;display:flex;align-items:center;justify-content:center"><span style="color:white;font-size:16px">⭐</span></div>'
  },
  {
    id: 'willpopscope',
    name: 'WillPopScope',
    description: '拦截返回按钮的 Widget',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget', required: true, description: '子组件' },
      { name: 'onWillPop', type: 'Future<bool> Function()?', description: '返回前回调' }
    ],
    usageExample: `WillPopScope(
  onWillPop: () async {
    final shouldPop = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Confirm'),
        content: Text('Exit?'),
      ),
    );
    return shouldPop ?? false;
  },
  child: Scaffold(...),
)`,
    relatedWidgets: ['PopScope', 'BackButton'],
    preview: '<div style="padding:6px 10px;background:#ffebee;color:#c62828;border-radius:4px;font-size:9px;border:1px solid #ef9a9a">🔙 拦截返回</div>'
  },
  {
    id: 'refreshindicator',
    name: 'RefreshIndicator',
    description: '下拉刷新指示器',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onRefresh', type: 'Future<void> Function()', required: true, description: '刷新回调' },
      { name: 'child', type: 'Widget', required: true, description: '可滚动的子组件' },
      { name: 'color', type: 'Color?', description: '指示器颜色' }
    ],
    usageExample: `RefreshIndicator(
  onRefresh: () async {
    await Future.delayed(Duration(seconds: 2));
  },
  child: ListView.builder(
    itemCount: 100,
    itemBuilder: (context, index) => ListTile(title: Text('Item \$index')),
  ),
)`,
    relatedWidgets: ['CustomScrollView', 'SliverRefreshControl'],
    preview: '<div style="position:relative;width:60px;height:40px;overflow:hidden"><div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(to right,#1976d2,#42a5f5,#1976d2);background-size:200% 100%;animation:shimmer 1s infinite"></div><div style="position:absolute;top:12px;font-size:9px;color:#666">↓ 下拉刷新</div></div><style>@keyframes shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}</style>'
  },
  {
    id: 'dismissible',
    name: 'Dismissible',
    description: '可滑动删除的 Widget',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'key', type: 'Key', required: true, description: '用于标识的唯一 Key' },
      { name: 'onDismissed', type: 'Function(DismissDirection)', required: true, description: '滑动删除回调' },
      { name: 'direction', type: 'DismissDirection', description: '滑动方向', defaultValue: 'DismissDirection.horizontal' },
      { name: 'background', type: 'Widget?', description: '背景组件' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `Dismissible(
  key: Key(item.id),
  direction: DismissDirection.endToStart,
  background: Container(color: Colors.red),
  onDismissed: (direction) {
    // 处理删除
  },
  child: ListTile(title: Text(item.title)),
)`,
    relatedWidgets: ['DismissDirection', 'DismissibleState'],
    preview: '<div style="position:relative;width:100px;height:36px"><div style="position:absolute;inset:0;background:#e57373;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;color:white;font-size:12px">🗑️</div><div style="position:absolute;inset:0 0 0 8px;background:white;border-radius:4px;display:flex;align-items:center;padding-left:8px;font-size:9px">← 滑动删除</div></div>'
  },
  {
    id: 'cliprrect',
    name: 'ClipRRect',
    description: '使用圆角矩形裁剪子组件',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'borderRadius', type: 'BorderRadius', description: '圆角半径', defaultValue: 'BorderRadius.zero' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `ClipRRect(
  borderRadius: BorderRadius.circular(16),
  child: Image.network(\'https://example.com/image.jpg\'),
)`,
    relatedWidgets: ['ClipOval', 'ClipPath'],
    preview: '<div style="width:60px;height:36px;background:linear-gradient(45deg,#667eea,#764ba2);border-radius:10px"></div>'
  },
  {
    id: 'clipoval',
    name: 'ClipOval',
    description: '使用椭圆形裁剪子组件',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `ClipOval(
  child: Image.network(\'https://example.com/image.jpg\'),
)`,
    relatedWidgets: ['CircleAvatar', 'ClipRRect'],
    preview: '<div style="width:36px;height:36px;background:linear-gradient(45deg,#f093fb,#f5576c);border-radius:50%"></div>'
  },
  {
    id: 'safearea',
    name: 'SafeArea',
    description: '避免系统边界（刘海、状态栏等）的安全区域',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'minimum', type: 'EdgeInsets', description: '最小内边距', defaultValue: 'EdgeInsets.zero' },
      { name: 'top', type: 'bool', description: '是否避免顶部边界', defaultValue: 'true' },
      { name: 'bottom', type: 'bool', description: '是否避免底部边界', defaultValue: 'true' }
    ],
    usageExample: `SafeArea(
  child: Scaffold(
    body: Center(child: Text(\'Safe content\')),
  ),
)`,
    relatedWidgets: ['Padding', 'MediaQuery'],
    preview: '<div style="width:70px;height:44px;border:2px solid #4caf50;border-radius:4px;position:relative;display:flex;align-items:center;justify-content:center;font-size:8px;color:#4caf50">安全区域</div>'
  },
  {
    id: 'layoutbuilder',
    name: 'LayoutBuilder',
    description: '根据父组件约束构建子组件',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'builder', type: 'Widget Function(BuildContext, BoxConstraints)', required: true, description: '构建器函数' }
    ],
    usageExample: `LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 600) {
      return Row(children: [...]);
    }
    return Column(children: [...]);
  },
)`,
    relatedWidgets: ['ConstrainedBox', 'MediaQuery'],
    preview: '<div style="padding:8px;background:#e3f2fd;border-radius:6px;font-size:9px;color:#1565c0;text-align:center">约束：maxWidth</div>'
  },
  {
    id: 'center',
    name: 'Center',
    description: '居中对齐子组件',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'widthFactor', type: 'double?', description: '宽度因子' },
      { name: 'heightFactor', type: 'double?', description: '高度因子' }
    ],
    usageExample: `Center(
  child: Text(\'Centered\'),
)`,
    relatedWidgets: ['Align', 'SizedBox'],
    preview: '<div style="width:60px;height:40px;background:#f5f5f5;border-radius:4px;display:flex;align-items:center;justify-content:center"><div style="width:20px;height:20px;background:#90caf9;border-radius:4px"></div></div>'
  },
  {
    id: 'align',
    name: 'Align',
    description: '在父组件内对齐子组件',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'alignment', type: 'AlignmentGeometry', required: true, description: '对齐方式', defaultValue: 'Alignment.center' },
      { name: 'widthFactor', type: 'double?', description: '宽度因子' },
      { name: 'heightFactor', type: 'double?', description: '高度因子' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Align(
  alignment: Alignment.topRight,
  child: Icon(Icons.star),
)`,
    relatedWidgets: ['Positioned', 'Center'],
    preview: '<div style="width:60px;height:40px;background:#f5f5f5;border-radius:4px;position:relative"><div style="position:absolute;top:4px;right:4px;width:14px;height:14px;background:#ffd54f;border-radius:3px"></div></div>'
  },
  {
    id: 'padding',
    name: 'Padding',
    description: '添加内边距的 Widget',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'padding', type: 'EdgeInsetsGeometry', required: true, description: '内边距' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Padding(
  padding: EdgeInsets.all(16),
  child: Text(\'Padded content\'),
)`,
    relatedWidgets: ['Container', 'EdgeInsets'],
    preview: '<div style="border:2px dashed #ffb74d;padding:8px;border-radius:4px"><div style="width:24px;height:16px;background:#ffcc80;border-radius:2px"></div></div>'
  },
  {
    id: 'wrap',
    name: 'Wrap',
    description: '自动换行布局，子组件超出时自动换行',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'direction', type: 'Axis', description: '主轴方向', defaultValue: 'Axis.horizontal' },
      { name: 'alignment', type: 'WrapAlignment', description: '主轴方向对齐', defaultValue: 'WrapAlignment.start' },
      { name: 'spacing', type: 'double', description: '主轴方向间距', defaultValue: '0.0' },
      { name: 'runSpacing', type: 'double', description: '交叉轴方向间距', defaultValue: '0.0' },
      { name: 'children', type: 'List<Widget>?', description: '子组件列表' }
    ],
    usageExample: `Wrap(
  spacing: 8,
  runSpacing: 8,
  children: [
    Chip(label: Text(\'Tag 1\')),
    Chip(label: Text(\'Tag 2\')),
    Chip(label: Text(\'Tag 3\')),
  ],
)`,
    relatedWidgets: ['Row', 'Flow', 'Chip'],
    preview: '<div style="display:flex;flex-wrap:wrap;gap:4px;max-width:70px"><span class="preview-chip" style="font-size:9px;padding:2px 6px">A</span><span class="preview-chip" style="font-size:9px;padding:2px 6px">B</span><span class="preview-chip" style="font-size:9px;padding:2px 6px">C</span></div>'
  },
  {
    id: 'textbutton',
    name: 'TextButton',
    description: 'Material Design 文本按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', required: true, description: '点击回调' },
      { name: 'child', type: 'Widget', required: true, description: '按钮内容' },
      { name: 'style', type: 'ButtonStyle?', description: '按钮样式' }
    ],
    usageExample: `TextButton(
  onPressed: () => print(\'Pressed!\'),
  child: Text(\'Click Me\'),
)`,
    relatedWidgets: ['ElevatedButton', 'OutlinedButton'],
    preview: '<button style="padding:6px 12px;background:transparent;color:#1976d2;border:none;border-radius:6px;font-size:11px;cursor:pointer">Text Button</button>'
  },
  {
    id: 'outlinedbutton',
    name: 'OutlinedButton',
    description: 'Material Design 轮廓按钮',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onPressed', type: 'VoidCallback?', required: true, description: '点击回调' },
      { name: 'child', type: 'Widget', required: true, description: '按钮内容' },
      { name: 'style', type: 'ButtonStyle?', description: '按钮样式' }
    ],
    usageExample: `OutlinedButton(
  onPressed: () => print(\'Pressed!\'),
  child: Text(\'Click Me\'),
)`,
    relatedWidgets: ['ElevatedButton', 'TextButton'],
    preview: '<button style="padding:6px 12px;background:transparent;color:#1976d2;border:1px solid #1976d2;border-radius:6px;font-size:11px;cursor:pointer">Outlined</button>'
  },
  {
    id: 'drawer',
    name: 'Drawer',
    description: 'Material Design 侧边抽屉菜单',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'child', type: 'Widget?', description: '子组件（通常是 ListView）' }
    ],
    usageExample: `Drawer(
  child: ListView(
    children: [
      DrawerHeader(
        child: Text(\'Header\'),
        decoration: BoxDecoration(color: Colors.blue),
      ),
      ListTile(leading: Icon(Icons.home), title: Text(\'Home\'), onTap: () {}),
    ],
  ),
)`,
    relatedWidgets: ['DrawerHeader', 'Scaffold'],
    preview: '<div style="width:60px;height:50px;border:1px solid #ddd;border-radius:4px;overflow:hidden;background:white"><div style="height:16px;background:#1976d2"></div><div style="padding:4px;font-size:8px">🏠 Home</div></div>'
  },
  {
    id: 'stepper',
    name: 'Stepper',
    description: 'Material Design 步骤指示器',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'steps', type: 'List<Step>', required: true, description: '步骤列表' },
      { name: 'currentStep', type: 'int', required: true, description: '当前步骤索引' },
      { name: 'onStepContinue', type: 'VoidCallback?', description: '继续按钮回调' },
      { name: 'onStepCancel', type: 'VoidCallback?', description: '取消按钮回调' }
    ],
    usageExample: `Stepper(
  currentStep: 1,
  onStepContinue: () => setState(() => _currentStep++),
  onStepCancel: () => setState(() => _currentStep--),
  steps: [
    Step(title: Text(\'Step 1\'), content: Text(\'Content 1\')),
    Step(title: Text(\'Step 2\'), content: Text(\'Content 2\')),
  ],
)`,
    relatedWidgets: ['Step', 'Timeline'],
    preview: '<div style="display:flex;align-items:center;gap:4px;width:80px"><div style="width:16px;height:16px;background:#4caf50;border-radius:50%;color:white;font-size:9px;display:flex;align-items:center;justify-content:center">✓</div><div style="flex:1;height:2px;background:#e0e0e0"></div><div style="width:16px;height:16px;background:#1976d2;border-radius:50%;color:white;font-size:9px;display:flex;align-items:center;justify-content:center">2</div><div style="flex:1;height:2px;background:#e0e0e0"></div><div style="width:16px;height:16px;background:#e0e0e0;border-radius:50%;color:#999;font-size:8px;display:flex;align-items:center;justify-content:center">3</div></div>'
  },
  {
    id: 'bottomsheet',
    name: 'BottomSheet',
    description: 'Material Design 底部弹层',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'onClosing', type: 'VoidCallback', required: true, description: '关闭回调' },
      { name: 'builder', type: 'Widget Function(BuildContext)', required: true, description: '构建器' }
    ],
    usageExample: `showModalBottomSheet(
  context: context,
  builder: (context) => Container(
    height: 200,
    child: Center(child: Text(\'Bottom Sheet\')),
  ),
)`,
    relatedWidgets: ['showModalBottomSheet', 'showBottomSheet'],
    preview: '<div style="width:80px;height:50px;position:relative;background:#f5f5f5;border-radius:8px 8px 0 0;border-top:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-size:9px">Bottom Sheet</div>'
  },
  {
    id: 'simpledialog',
    name: 'SimpleDialog',
    description: '简单的 Material 对话框',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'title', type: 'Widget?', description: '标题' },
      { name: 'children', type: 'List<Widget>?', description: '子组件列表' }
    ],
    usageExample: `SimpleDialog(
  title: Text(\'Select Option\'),
  children: [
    SimpleDialogOption(onPressed: () => Navigator.pop(context), child: Text(\'Option 1\')),
    SimpleDialogOption(onPressed: () => Navigator.pop(context), child: Text(\'Option 2\')),
  ],
)`,
    relatedWidgets: ['AlertDialog', 'Dialog'],
    preview: '<div style="background:white;padding:12px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:100px"><div style="font-weight:600;font-size:10px;margin-bottom:8px;text-align:center">Select</div><div style="font-size:9px;color:#1976d2;text-align:center">Option 1</div></div>'
  },
  {
    id: 'indexedstack',
    name: 'IndexedStack',
    description: '显示子组件中指定索引的组件，其他隐藏',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'index', type: 'int', description: '当前显示的子组件索引', defaultValue: '0' },
      { name: 'children', type: 'List<Widget>?', description: '子组件列表' }
    ],
    usageExample: `IndexedStack(
  index: _currentIndex,
  children: [
    HomeScreen(),
    SearchScreen(),
    ProfileScreen(),
  ],
)`,
    relatedWidgets: ['Stack', 'TabBarView'],
    preview: '<div style="position:relative;width:50px;height:36px"><div style="position:absolute;inset:0;background:#81c784;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:9px;color:white">Page 2</div></div>'
  },
  {
    id: 'reorderablelistview',
    name: 'ReorderableListView',
    description: '可重新排序的列表',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'children', type: 'List<Widget>', required: true, description: '列表项列表' },
      { name: 'onReorder', type: 'Function(int, int)', required: true, description: '重新排序回调' }
    ],
    usageExample: `ReorderableListView(
  children: items.map((item) => ListTile(
    key: ValueKey(item.id),
    title: Text(item.title),
  )).toList(),
  onReorder: (oldIndex, newIndex) {
    setState(() {
      if (newIndex > oldIndex) newIndex--;
      final item = items.removeAt(oldIndex);
      items.insert(newIndex, item);
    });
  },
)`,
    relatedWidgets: ['Draggable', 'LongPressDraggable'],
    preview: '<div style="width:80px"><div style="display:flex;justify-content:space-between;padding:4px;border:1px solid #e0e0e0;margin-bottom:2px;border-radius:4px;font-size:8px"><span>Item 1</span><span>⋮⋮</span></div><div style="display:flex;justify-content:space-between;padding:4px;border:1px solid #e0e0e0;border-radius:4px;font-size:8px"><span>Item 2</span><span>⋮⋮</span></div></div>'
  },
  {
    id: 'customscrollview',
    name: 'CustomScrollView',
    description: '自定义可滚动视图，支持 Sliver',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'slivers', type: 'List<Widget>', required: true, description: 'Sliver 组件列表' },
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.vertical' },
      { name: 'controller', type: 'ScrollController?', description: '滚动控制器' }
    ],
    usageExample: `CustomScrollView(
  slivers: [
    SliverAppBar(expandedHeight: 200, pinned: true),
    SliverList(delegate: SliverChildListDelegate([...]))
  ],
)`,
    relatedWidgets: ['SliverAppBar', 'SliverList', 'SliverGrid'],
    preview: '<div style="width:60px;height:40px;overflow:hidden;position:relative;background:#f5f5f5"><div style="height:12px;background:#1976d2"></div><div style="padding:2px;font-size:6px">Sliver</div></div>'
  },
  {
    id: 'mediquery',
    name: 'MediaQuery',
    description: '获取媒体查询信息（屏幕尺寸、方向等）',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'of', type: 'static MediaQueryData Function(BuildContext)', description: '获取 MediaQueryData 的静态方法' }
    ],
    usageExample: `final size = MediaQuery.of(context).size;
final padding = MediaQuery.of(context).padding;

Text(\'Screen width: \${size.width}\');`,
    relatedWidgets: ['LayoutBuilder', 'OrientationBuilder'],
    preview: '<div style="padding:6px 10px;background:#e8f5e9;color:#2e7d32;border-radius:4px;font-size:9px">📱 390 x 844</div>'
  },
  {
    id: 'offstage',
    name: 'Offstage',
    description: '隐藏子组件但保留布局位置',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'offstage', type: 'bool', required: true, description: '是否隐藏' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Offstage(
  offstage: _isHidden,
  child: Text(\'Hidden but still takes space\'),
)`,
    relatedWidgets: ['Visibility', 'IgnorePointer'],
    preview: '<div style="padding:4px 8px;background:#f5f5f5;color:#999;border-radius:4px;font-size:9px;border:1px dashed #e0e0e0">隐藏但占位</div>'
  },
  {
    id: 'ignorepointer',
    name: 'IgnorePointer',
    description: '忽略子组件的触摸事件',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'ignoring', type: 'bool', required: true, description: '是否忽略触摸', defaultValue: 'true' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `IgnorePointer(
  ignoring: _isDisabled,
  child: ElevatedButton(
    onPressed: () {},
    child: Text(\'Cannot tap\'),
  ),
)`,
    relatedWidgets: ['AbsorbPointer', 'UserScrollNotification'],
    preview: '<button disabled style="padding:4px 10px;background:#e0e0e0;color:#999;border:none;border-radius:4px;font-size:9px;cursor:not-allowed;opacity:0.6">禁用</button>'
  },
  {
    id: 'inkwell',
    name: 'InkWell',
    description: 'Material 水波纹效果组件',
    category: 'material',
    categoryDisplay: 'Material',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'onTap', type: 'VoidCallback?', description: '点击回调' },
      { name: 'onDoubleTap', type: 'VoidCallback?', description: '双击回调' },
      { name: 'onLongPress', type: 'VoidCallback?', description: '长按回调' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `InkWell(
  onTap: () => print(\'Tapped!\'),
  onLongPress: () => print(\'Long pressed!\'),
  child: Container(
    padding: EdgeInsets.all(16),
    child: Text(\'Tap me\'),
  ),
)`,
    relatedWidgets: ['Ink', 'GestureDetector'],
    preview: '<div style="padding:8px 14px;background:#e3f2fd;color:#1565c0;border-radius:6px;font-size:10px;cursor:pointer;position:relative;overflow:hidden">💧 水波纹</div>'
  },
  {
    id: 'backdropfilter',
    name: 'BackdropFilter',
    description: '对已绘制的内容应用滤镜（毛玻璃效果）',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'filter', type: 'ImageFilter', required: true, description: '图像滤镜' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `Stack(
  children: [
    Image.network(\'https://example.com/bg.jpg\'),
    BackdropFilter(
      filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
      child: Container(color: Colors.white.withOpacity(0.3)),
    ),
  ],
)`,
    relatedWidgets: ['ImageFilter', 'ColorFiltered'],
    preview: '<div style="position:relative;width:60px;height:40px;background:linear-gradient(45deg,#667eea,#764ba2);border-radius:6px;overflow:hidden"><div style="position:absolute;inset:0;background:rgba(255,255,255,0.2);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;font-size:8px;color:white">毛玻璃</div></div>'
  },
  {
    id: 'fractionallysizedbox',
    name: 'FractionallySizedBox',
    description: '按父组件比例调整大小的盒子',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'widthFactor', type: 'double?', description: '宽度比例' },
      { name: 'heightFactor', type: 'double?', description: '高度比例' },
      { name: 'alignment', type: 'AlignmentGeometry?', description: '对齐方式' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `FractionallySizedBox(
  widthFactor: 0.5, // 占父组件 50% 宽度
  heightFactor: 0.3, // 占父组件 30% 高度
  child: Container(color: Colors.blue),
)`,
    relatedWidgets: ['AspectRatio', 'SizedBox'],
    preview: '<div style="width:60px;height:40px;background:#f5f5f5;border-radius:4px;position:relative"><div style="position:absolute;left:0;right:0;top:0;bottom:0;width:30px;height:12px;background:#ffb74d;margin:auto;border-radius:2px"></div></div>'
  },
  {
    id: 'decoratedbox',
    name: 'DecoratedBox',
    description: '使用装饰绘制子组件',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'decoration', type: 'Decoration', required: true, description: '装饰' },
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'position', type: 'DecorationPosition', description: '装饰位置', defaultValue: 'DecorationPosition.background' }
    ],
    usageExample: `DecoratedBox(
  decoration: BoxDecoration(
    gradient: LinearGradient(colors: [Colors.purple, Colors.pink]),
    borderRadius: BorderRadius.circular(12),
  ),
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Text(\'Content\'),
  ),
)`,
    relatedWidgets: ['Container', 'BoxDecoration'],
    preview: '<div style="width:60px;height:36px;background:linear-gradient(135deg,#ab47bc,#ec407a);border-radius:8px"></div>'
  },
  {
    id: 'sliverlist',
    name: 'SliverList',
    description: '可滚动列表的 Sliver 版本',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'delegate', type: 'SliverChildDelegate', required: true, description: '子组件代理' }
    ],
    usageExample: `CustomScrollView(
  slivers: [
    SliverAppBar(expandedHeight: 200),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(title: Text(\'Item \$index\')),
        childCount: 100,
      ),
    ),
  ],
)`,
    relatedWidgets: ['SliverGrid', 'SliverFixedExtentList'],
    preview: '<div style="width:50px"><div style="padding:3px;font-size:7px;border-bottom:1px solid #eee">Item 1</div><div style="padding:3px;font-size:7px;border-bottom:1px solid #eee">Item 2</div><div style="padding:3px;font-size:7px;border-bottom:1px solid #eee">Item 3</div></div>'
  },
  {
    id: 'slivergrid',
    name: 'SliverGrid',
    description: '可滚动网格的 Sliver 版本',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'gridDelegate', type: 'SliverGridDelegate', required: true, description: '网格代理' },
      { name: 'delegate', type: 'SliverChildDelegate', required: true, description: '子组件代理' }
    ],
    usageExample: `CustomScrollView(
  slivers: [
    SliverGrid(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      delegate: SliverChildBuilderDelegate(
        (context, index) => Card(child: Center(child: Text('\$index'))),
        childCount: 20,
      ),
    ),
  ],
)`,
    relatedWidgets: ['GridView', 'SliverList'],
    preview: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;width:50px"><div style="height:20px;background:#e3f2fd;border-radius:2px"></div><div style="height:20px;background:#e8f5e9;border-radius:2px"></div><div style="height:20px;background:#fff3e0;border-radius:2px"></div><div style="height:20px;background:#fce4ec;border-radius:2px"></div></div>'
  },
  {
    id: 'animatedrotation',
    name: 'AnimatedRotation',
    description: '旋转动画组件',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'turns', type: 'double', required: true, description: '旋转圈数（1 = 360 度）' },
      { name: 'duration', type: 'Duration', required: true, description: '动画持续时间' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `AnimatedRotation(
  turns: _isRotated ? 0.5 : 0,
  duration: Duration(milliseconds: 500),
  child: Icon(Icons.star),
)`,
    relatedWidgets: ['RotationTransition', 'AnimatedBuilder'],
    preview: '<div style="width:36px;height:36px;background:#ffd54f;border-radius:4px;display:flex;align-items:center;justify-content:center;transform:rotate(45deg)"><span style="font-size:16px">⭐</span></div>'
  },
  {
    id: 'animatedscale',
    name: 'AnimatedScale',
    description: '缩放动画组件',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'scale', type: 'double', required: true, description: '缩放比例' },
      { name: 'duration', type: 'Duration', required: true, description: '动画持续时间' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `AnimatedScale(
  scale: _isScaled ? 1.5 : 1.0,
  duration: Duration(milliseconds: 300),
  child: Icon(Icons.favorite),
)`,
    relatedWidgets: ['ScaleTransition', 'AnimatedContainer'],
    preview: '<div style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;transform:scale(1.3)"><span style="font-size:24px;color:#ec407a">❤️</span></div>'
  },
  {
    id: 'animatedbuilder',
    name: 'AnimatedBuilder',
    description: '通用动画构建器，用于创建自定义动画',
    category: 'animation',
    categoryDisplay: '动画',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'animation', type: 'Animation<double>', required: true, description: '动画对象' },
      { name: 'builder', type: 'Widget Function(BuildContext, Widget?)', required: true, description: '构建器函数' },
      { name: 'child', type: 'Widget?', description: '子组件（可复用）' }
    ],
    usageExample: `AnimatedBuilder(
  animation: _animation,
  builder: (context, child) {
    return Transform.rotate(
      angle: _animation.value * 2 * pi,
      child: child,
    );
  },
  child: Icon(Icons.refresh),
)`,
    relatedWidgets: ['AnimationController', 'Tween'],
    preview: '<div style="width:32px;height:32px;border:3px solid #e0e0e0;border-top-color:#1976d2;border-radius:50%;animation:spin 1s linear infinite"></div><style>@keyframes spin{to{transform:rotate(360deg)}}</style>'
  },
  {
    id: 'popscope',
    name: 'PopScope',
    description: '处理返回按钮和弹出路由的 Widget（Flutter 3.7+）',
    category: 'basic',
    categoryDisplay: '基础',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'child', type: 'Widget', required: true, description: '子组件' },
      { name: 'canPop', type: 'bool', description: '是否允许弹出', defaultValue: 'true' },
      { name: 'onPopInvoked', type: 'Function(bool)?', description: '弹出回调' }
    ],
    usageExample: `PopScope(
  canPop: false,
  onPopInvoked: (didPop) {
    if (didPop) return;
    // 处理返回
  },
  child: Scaffold(...),
)`,
    relatedWidgets: ['WillPopScope', 'Navigator'],
    preview: '<div style="padding:6px 10px;background:#e8eaf6;color:#3949ab;border-radius:4px;font-size:9px;border:1px solid #9fa8da">🔙 PopScope</div>'
  },
  {
    id: 'interactiveviewer',
    name: 'InteractiveViewer',
    description: '支持平移和缩放的交互视图',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'child', type: 'Widget', required: true, description: '子组件' },
      { name: 'minScale', type: 'double', description: '最小缩放比例', defaultValue: '0.8' },
      { name: 'maxScale', type: 'double', description: '最大缩放比例', defaultValue: '2.5' },
      { name: 'panEnabled', type: 'bool', description: '是否启用平移', defaultValue: 'true' },
      { name: 'scaleEnabled', type: 'bool', description: '是否启用缩放', defaultValue: 'true' }
    ],
    usageExample: `InteractiveViewer(
  minScale: 0.5,
  maxScale: 4,
  child: Image.network(\'https://example.com/large-image.jpg\'),
)`,
    relatedWidgets: ['GestureDetector', 'Transform'],
    preview: '<div style="width:60px;height:40px;background:linear-gradient(45deg,#42a5f5,#478ed1,#0d47a1);border-radius:6px;display:flex;align-items:center;justify-content:center;overflow:hidden"><span style="color:white;font-size:16px">🔍</span></div>'
  },
  {
    id: 'constrainedbox',
    name: 'ConstrainedBox',
    description: '对子组件施加额外的约束',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'constraints', type: 'BoxConstraints', required: true, description: '约束条件' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `ConstrainedBox(
  constraints: BoxConstraints(
    minWidth: 100,
    maxWidth: 200,
    minHeight: 50,
    maxHeight: 100,
  ),
  child: Container(color: Colors.blue),
)`,
    relatedWidgets: ['SizedBox', 'Container', 'LayoutBuilder'],
    preview: '<div style="width:60px;height:40px;background:#ce93d8;border-radius:4px;border:2px dashed #7b1fa2;display:flex;align-items:center;justify-content:center;font-size:8px;color:#7b1fa2">约束</div>'
  },
  {
    id: 'fittedbox',
    name: 'FittedBox',
    description: '调整子组件大小以适应父组件',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'fit', type: 'BoxFit', description: '适配方式', defaultValue: 'BoxFit.scaleDown' },
      { name: 'alignment', type: 'AlignmentGeometry', description: '对齐方式', defaultValue: 'Alignment.center' },
      { name: 'child', type: 'Widget?', description: '子组件' }
    ],
    usageExample: `FittedBox(
  fit: BoxFit.contain,
  child: Text(\'Very long text that will be scaled\'),
)`,
    relatedWidgets: ['AspectRatio', 'FractionallySizedBox'],
    preview: '<div style="width:60px;height:30px;background:#f0f0f0;border-radius:4px;display:flex;align-items:center;justify-content:center;overflow:hidden"><span style="font-size:8px;color:#666">缩放文本</span></div>'
  },
  {
    id: 'orientationbuilder',
    name: 'OrientationBuilder',
    description: '根据屏幕方向构建子组件',
    category: 'layout',
    categoryDisplay: '布局',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'builder', type: 'Widget Function(BuildContext, Orientation)', required: true, description: '构建器函数' }
    ],
    usageExample: `OrientationBuilder(
  builder: (context, orientation) {
    if (orientation == Orientation.portrait) {
      return Column(children: [...]);
    }
    return Row(children: [...]);
  },
)`,
    relatedWidgets: ['LayoutBuilder', 'MediaQuery'],
    preview: '<div style="width:40px;height:28px;background:#b3e5fc;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:8px;color:#0277bd">📱 方向</div>'
  },
  {
    id: 'textformfield',
    name: 'TextFormField',
    description: '带验证功能的表单输入框',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'high',
    usageDisplay: '常用',
    properties: [
      { name: 'controller', type: 'TextEditingController?', description: '文本控制器' },
      { name: 'decoration', type: 'InputDecoration?', description: '输入框装饰' },
      { name: 'validator', type: 'FormFieldValidator<String>?', description: '验证器' },
      { name: 'onSaved', type: 'FormFieldSetter<String>?', description: '保存回调' },
      { name: 'initialValue', type: 'String?', description: '初始值' }
    ],
    usageExample: `TextFormField(
  decoration: InputDecoration(
    labelText: \'Email\',
    border: OutlineInputBorder(),
  ),
  validator: (value) {
    if (value == null || value.isEmpty) {
      return \'Please enter your email\';
    }
    return null;
  },
)`,
    relatedWidgets: ['TextField', 'Form'],
    preview: '<input class="preview-input" placeholder="Email" style="width:100px">'
  },
  {
    id: 'togglebuttons',
    name: 'ToggleButtons',
    description: '一组切换按钮',
    category: 'input',
    categoryDisplay: '输入',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'children', type: 'List<Widget>', required: true, description: '按钮列表' },
      { name: 'isSelected', type: 'List<bool>', required: true, description: '每个按钮的选中状态' },
      { name: 'onPressed', type: 'Function(int)?', required: true, description: '按钮点击回调' },
      { name: 'selectedColor', type: 'Color?', description: '选中时的颜色' },
      { name: 'borderRadius', type: 'BorderRadius?', description: '圆角半径' }
    ],
    usageExample: `ToggleButtons(
  children: [
    Icon(Icons.format_bold),
    Icon(Icons.format_italic),
    Icon(Icons.format_underline),
  ],
  isSelected: _isSelected,
  onPressed: (index) {
    setState(() => _isSelected[index] = !_isSelected[index]);
  },
)`,
    relatedWidgets: ['ToggleButtonGroup', 'SegmentedButton'],
    preview: '<div style="display:flex;border:1px solid #1976d2;border-radius:6px;overflow:hidden"><span style="padding:4px 8px;background:#1976d2;color:white;font-size:12px">B</span><span style="padding:4px 8px;color:#1976d2;font-size:12px">I</span><span style="padding:4px 8px;color:#1976d2;font-size:12px">U</span></div>'
  },
  {
    id: 'navigationrail',
    name: 'NavigationRail',
    description: 'Material Design 侧边导航栏',
    category: 'navigation',
    categoryDisplay: '导航',
    usageLevel: 'medium',
    usageDisplay: '一般',
    properties: [
      { name: 'destinations', type: 'List<NavigationRailDestination>', required: true, description: '导航目的地列表' },
      { name: 'selectedIndex', type: 'int', required: true, description: '当前选中索引' },
      { name: 'onDestinationSelected', type: 'Function(int)', required: true, description: '目的地选中回调' }
    ],
    usageExample: `NavigationRail(
  selectedIndex: _selectedIndex,
  onDestinationSelected: (index) => setState(() => _selectedIndex = index),
  destinations: [
    NavigationRailDestination(icon: Icon(Icons.home), label: Text('Home')),
    NavigationRailDestination(icon: Icon(Icons.search), label: Text('Search')),
  ],
)`,
    relatedWidgets: ['NavigationRailDestination', 'BottomNavigationBar'],
    preview: '<div style="width:40px;height:60px;background:#f5f5f5;border-radius:4px;display:flex;flex-direction:column;align-items:center;padding:4px;gap:4px"><span style="font-size:16px;color:#1976d2">🏠</span><span style="font-size:16px;color:#999">🔍</span></div>'
  },

  // ==================== 第三方知名 Widget ====================

  // cached_network_image 包
  {
    id: 'cachednetworkimage',
    name: 'CachedNetworkImage',
    description: '带缓存的网络图片组件，支持占位符和错误处理',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'cached_network_image',
    properties: [
      { name: 'imageUrl', type: 'String', required: true, description: '图片 URL' },
      { name: 'placeholder', type: 'WidgetBuilder?', description: '加载中的占位符' },
      { name: 'errorWidget', type: 'WidgetBuilder?', description: '加载失败的占位符' },
      { name: 'fit', type: 'BoxFit?', description: '图片填充方式' },
      { name: 'cacheKey', type: 'String?', description: '缓存键' },
      { name: 'memCacheWidth', type: 'int?', description: '内存缓存宽度' }
    ],
    usageExample: `CachedNetworkImage(
  imageUrl: 'https://example.com/image.jpg',
  placeholder: (context, url) => CircularProgressIndicator(),
  errorWidget: (context, url, error) => Icon(Icons.error),
  fit: BoxFit.cover,
  cacheKey: 'unique_cache_key',
)`,
    relatedWidgets: ['Image.network', 'FadeInImage', 'SvgPicture'],
    preview: '<div style="width:60px;height:40px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:6px;display:flex;align-items:center;justify-content:center;color:white;font-size:10px">Cache</div>',
    detailedDoc: {
      overview: 'CachedNetworkImage 是最流行的 Flutter 图片缓存库，提供自动内存和磁盘缓存功能。它支持图片加载进度显示、自定义占位符、错误处理等丰富功能。',
      useCases: [
        '需要缓存的网络图片（头像、商品图等）',
        '长列表中的图片（减少重复加载）',
        '需要显示加载进度的场景',
        '需要自定义错误提示的场景'
      ],
      commonPatterns: [
        { title: '带进度显示', code: 'CachedNetworkImage(imageUrl: url, progressIndicatorBuilder: (c, u, d) => CircularProgressIndicator(value: d.progress))' },
        { title: '带占位符', code: 'CachedNetworkImage(imageUrl: url, placeholder: (c, u) => Image.asset(\'assets/placeholder.png\'))' },
        { title: '圆形头像', code: 'CachedNetworkImage(imageUrl: url, imageBuilder: (c, p) => CircleAvatar(backgroundImage: p))' }
      ],
      pitfalls: [
        '首次加载图片仍需要网络请求，缓存只在第二次生效',
        '缓存大小有限制，可通过 cacheManager 自定义',
        '本地图片不需要使用此组件'
      ],
      performance: '优秀。自动管理内存和磁盘缓存，显著减少网络请求和内存占用。'
    }
  },

  // flutter_svg 包
  {
    id: 'svgpicture',
    name: 'SvgPicture',
    description: '显示 SVG 矢量图片的组件',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'flutter_svg',
    properties: [
      { name: 'src', type: 'String', description: 'SVG 资源路径' },
      { name: 'bytesLoader', type: 'SvgBytesLoader?', description: '从字节加载 SVG' },
      { name: 'width', type: 'double?', description: '宽度' },
      { name: 'height', type: 'double?', description: '高度' },
      { name: 'fit', type: 'BoxFit?', description: '填充方式' },
      { name: 'colorFilter', type: 'ColorFilter?', description: '颜色滤镜' }
    ],
    usageExample: `// 从资源加载
SvgPicture.asset('assets/icon.svg', width: 24, height: 24)

// 从网络加载
SvgPicture.network('https://example.com/icon.svg')

// 从字符串加载
SvgPicture.string('<svg>...</svg>')

// 带颜色过滤
SvgPicture.asset('icon.svg', colorFilter: ColorFilter.mode(Colors.blue, BlendMode.srcIn))`,
    relatedWidgets: ['Image', 'Icon', 'Picture'],
    preview: '<div style="width:40px;height:40px;background:#1976d2;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:18px">SVG</div>',
    detailedDoc: {
      overview: 'flutter_svg 是官方推荐的 SVG 渲染库，支持完整的 SVG 1.1 规范。相比位图，SVG 矢量图可以无损缩放，适合图标、logo 等场景。',
      useCases: [
        '显示图标、logo 等矢量图形',
        '需要多尺寸适配的图片',
        '需要动态改变颜色的图标',
        '复杂的矢量图形展示'
      ],
      commonPatterns: [
        { title: '动态颜色图标', code: 'SvgPicture.asset(\'icon.svg\', colorFilter: ColorFilter.mode(iconColor, BlendMode.srcIn))' },
        { title: '固定尺寸', code: 'SvgPicture.asset(\'icon.svg\', width: 24, height: 24)' },
        { title: '网络 SVG', code: 'SvgPicture.network(svgUrl, height: 100)' }
      ],
      pitfalls: [
        '复杂的 SVG 文件可能渲染较慢',
        '不支持 SVG 1.2 和 CSS 样式',
        '从网络加载需要缓存时建议配合 cached_network_image 使用'
      ],
      performance: '良好。简单 SVG 性能优秀，复杂路径需要预渲染优化。'
    }
  },

  // shimmer 包
  {
    id: 'shimmer',
    name: 'Shimmer',
    description: '骨架屏加载动画效果',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'shimmer',
    properties: [
      { name: 'duration', type: 'Duration', description: '动画持续时间', defaultValue: 'Duration(milliseconds: 1500)' },
      { name: 'direction', type: 'ShimmerDirection', description: '动画方向', defaultValue: 'ShimmerDirection.ltr' },
      { name: 'enabled', type: 'bool', description: '是否启用动画', defaultValue: 'true' },
      { name: 'child', type: 'Widget', required: true, description: '子组件' }
    ],
    usageExample: `Shimmer.fromColors(
  baseColor: Colors.grey[300]!,
  highlightColor: Colors.grey[100]!,
  duration: Duration(milliseconds: 1500),
  child: Column(
    children: [
      Container(width: 60, height: 60, decoration: BoxDecoration(color: Colors.white, shape: BoxShape.circle)),
      SizedBox(height: 16),
      Container(width: 200, height: 16, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8))),
    ],
  ),
)`,
    relatedWidgets: ['LinearProgressIndicator', 'Skeletonizer'],
    preview: '<div style="width:60px;height:60px;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;border-radius:50%;animation:shimmer 1.5s infinite"></div><style>@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}</style>',
    detailedDoc: {
      overview: 'Shimmer 提供优雅的骨架屏加载效果，在数据加载时显示占位符动画，提升用户体验。支持自定义基础色和高亮色，可控制动画方向和速度。',
      useCases: [
        '列表数据加载中的占位显示',
        '卡片内容加载前的骨架展示',
        '图片加载前的占位符',
        '任何需要加载动画的场景'
      ],
      commonPatterns: [
        { title: '列表骨架', code: 'ListView.builder(itemBuilder: (c, i) => Shimmer(child: ListTile(...)))' },
        { title: '卡片骨架', code: 'Shimmer(child: Card(child: Column(children: [ImagePlaceholder(), TextPlaceholder()])))' },
        { title: '禁用动画', code: 'Shimmer(enabled: loaded, child: content)' }
      ],
      pitfalls: [
        '动画会持续消耗资源，数据加载完成后应设置 enabled: false',
        '过多 Shimmer 同时动画可能影响性能',
        '需要合理设置 baseColor 和 highlightColor 以匹配主题'
      ],
      performance: '良好。使用 ShaderMask 实现，适量使用性能优秀。'
    }
  },

  // flutter_swiper / card_swiper 包
  {
    id: 'cardswiper',
    name: 'CardSwiper',
    description: '卡片轮播组件，支持自定义卡片样式',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'card_swiper',
    properties: [
      { name: 'itemCount', type: 'int', required: true, description: '卡片数量' },
      { name: 'itemBuilder', type: 'SwiperItemBuilder', required: true, description: '卡片构建器' },
      { name: 'scrollDirection', type: 'Axis', description: '滚动方向', defaultValue: 'Axis.horizontal' },
      { name: 'autoplay', type: 'bool', description: '是否自动播放', defaultValue: 'false' },
      { name: 'duration', type: 'Duration', description: '动画持续时间', defaultValue: 'Duration(milliseconds: 300)' },
      { name: 'layout', type: 'SwiperLayout', description: '布局类型', defaultValue: 'SwiperLayout.DEFAULT' }
    ],
    usageExample: `CardSwiper(
  itemCount: bannerList.length,
  itemBuilder: (context, index) => Image.network(bannerList[index]),
  autoplay: true,
  duration: 800,
  layout: SwiperLayout.STACK,
  pagination: SwiperPagination(),
  control: SwiperControl(),
)`,
    relatedWidgets: ['PageView', 'Swiper', 'CarouselSlider'],
    preview: '<div style="width:80px;height:40px;position:relative"><div style="position:absolute;left:0;width:60px;height:40px;background:#64b5f6;border-radius:8px;opacity:0.7"></div><div style="position:absolute;left:10px;width:60px;height:40px;background:#1976d2;border-radius:8px"></div></div>',
    detailedDoc: {
      overview: 'CardSwiper 是功能强大的卡片轮播组件，支持多种布局模式（默认、堆叠、圆形等）、自动播放、分页器和控制器。是 flutter_swiper 的升级版。',
      useCases: [
        '首页轮播广告图',
        '图片画廊展示',
        '卡片堆叠效果',
        '圆形菜单轮播'
      ],
      commonPatterns: [
        { title: '自动轮播', code: 'CardSwiper(itemCount: count, itemBuilder: builder, autoplay: true, autoplayDelay: 3000)' },
        { title: '堆叠效果', code: 'CardSwiper(layout: SwiperLayout.STACK, itemCount: count, itemBuilder: builder)' },
        { title: '垂直轮播', code: 'CardSwiper(scrollDirection: Axis.vertical, ...)' }
      ],
      pitfalls: [
        '在 ListView 中使用需要设置 shrinkWrap: true',
        '自动播放会在页面退出时继续，需要在 dispose 中停止',
        '自定义布局时注意卡片尺寸计算'
      ],
      performance: '良好。使用 PageView 实现，性能优秀。'
    }
  },

  // flutter_rating_bar 包
  {
    id: 'ratingbar',
    name: 'RatingBar',
    description: '星级评分组件',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'flutter_rating_bar',
    properties: [
      { name: 'rating', type: 'double', required: true, description: '当前评分' },
      { name: 'onRatingUpdate', type: 'ValueChanged<double>', required: true, description: '评分更新回调' },
      { name: 'itemCount', type: 'int', description: '星星数量', defaultValue: '5' },
      { name: 'itemSize', type: 'double', description: '星星大小', defaultValue: '40.0' },
      { name: 'color', type: 'Color', description: '选中颜色', defaultValue: 'Colors.amber' },
      { name: 'allowHalfRating', type: 'bool', description: '是否允许半星', defaultValue: 'true' }
    ],
    usageExample: `RatingBar.builder(
  initialRating: 4,
  minRating: 1,
  direction: Axis.horizontal,
  allowHalfRating: true,
  itemCount: 5,
  itemSize: 30,
  itemPadding: EdgeInsets.symmetric(horizontal: 4),
  itemBuilder: (context, _) => Icon(Icons.star, color: Colors.amber),
  onRatingUpdate: (rating) => print(rating),
)`,
    relatedWidgets: ['RatingBarIndicator', 'SmoothRatingBar'],
    preview: '<div style="display:flex;gap:2px"><span style="color:#ffc107;font-size:20px">★</span><span style="color:#ffc107;font-size:20px">★</span><span style="color:#ffc107;font-size:20px">★</span><span style="color:#ffc107;font-size:20px">★</span><span style="color:#e0e0e0;font-size:20px">★</span></div>',
    detailedDoc: {
      overview: 'flutter_rating_bar 提供灵活的星级评分组件，支持完整星、半星、自定义图标、指示器模式等。适用于商品评价、服务评分等场景。',
      useCases: [
        '商品/服务评价',
        '电影/音乐评分',
        '用户反馈收集',
        '只读评分显示（指示器模式）'
      ],
      commonPatterns: [
        { title: '只读指示器', code: 'RatingBarIndicator(rating: 4.5, itemCount: 5, itemSize: 20)' },
        { title: '自定义图标', code: 'RatingBar(itemBuilder: (c, _) => Icon(Icons.favorite), ...)' },
        { title: '整数评分', code: 'RatingBar(allowHalfRating: false, ...)' }
      ],
      pitfalls: [
        '在可滚动组件中使用时需要处理手势冲突',
        '半星评分需要 allowHalfRating: true',
        'itemSize 会影响触摸区域大小'
      ],
      performance: '优秀。轻量级组件，无性能问题。'
    }
  },

  // pull_to_refresh 包
  {
    id: 'smartrefresher',
    name: 'SmartRefresher',
    description: '下拉刷新和上拉加载组件',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'pull_to_refresh',
    properties: [
      { name: 'controller', type: 'RefreshController', required: true, description: '刷新控制器' },
      { name: 'onRefresh', type: 'VoidCallback?', description: '下拉刷新回调' },
      { name: 'onLoading', type: 'VoidCallback?', description: '上拉加载回调' },
      { name: 'header', type: 'Widget?', description: '自定义头部刷新指示器' },
      { name: 'footer', type: 'Widget?', description: '自定义底部加载指示器' },
      { name: 'child', type: 'Widget', required: true, description: '可滚动的子组件' }
    ],
    usageExample: `SmartRefresher(
  controller: _refreshController,
  onRefresh: _onRefresh,
  onLoading: _onLoading,
  header: ClassicHeader(),
  footer: ClassicFooter(),
  child: ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) => ListTile(title: Text(items[index])),
  ),
)`,
    relatedWidgets: ['RefreshIndicator', 'CustomScrollView', 'SliverToBoxAdapter'],
    preview: '<div style="width:60px;height:80px;background:#f5f5f5;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px"><span style="font-size:16px;color:#1976d2">↓</span><span style="font-size:8px;color:#999">刷新</span></div>',
    detailedDoc: {
      overview: 'pull_to_refresh 提供完整的下拉刷新和上拉加载解决方案，支持多种内置样式（经典、Material、Cupertino 等），可自定义头部和底部指示器。',
      useCases: [
        '列表下拉刷新数据',
        '列表上拉加载更多',
        '需要自定义刷新样式的场景',
        '同时需要刷新和加载的场景'
      ],
      commonPatterns: [
        { title: '经典样式', code: 'SmartRefresher(header: ClassicHeader(), footer: ClassicFooter(), ...)' },
        { title: 'Material 样式', code: 'SmartRefresher(header: MaterialHeader(), ...)' },
        { title: '禁用加载', code: 'SmartRefresher(enablePullUp: false, ...)' }
      ],
      pitfalls: [
        '需要在 refresh 和 loading 完成后调用 controller 的方法结束状态',
        'child 必须是可滚动组件（ListView、GridView 等）',
        '在 NestedScrollView 中需要特殊处理'
      ],
      performance: '优秀。基于 Notification 机制，性能开销小。'
    }
  },

  // flutter_animate 包
  {
    id: 'animate',
    name: 'Animate',
    description: '声明式动画组件，简化动画实现',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'flutter_animate',
    properties: [
      { name: 'duration', type: 'Duration', description: '动画持续时间' },
      { name: 'delay', type: 'Duration', description: '动画延迟时间' },
      { name: 'curve', type: 'Curve', description: '动画曲线' },
      { name: 'effects', type: 'List<Effect>', description: '效果列表，如 FadeEffect、ScaleEffect 等' }
    ],
    usageExample: `// 使用扩展方法
Text('Hello')
  .animate()
  .fadeIn(duration: 600.ms)
  .slideX(begin: -0.5, end: 0);

// 使用 Animate 组件
Animate(
  effects: [
    FadeEffect(duration: 600.ms),
    ScaleEffect(duration: 600.ms),
  ],
  child: Text('Hello'),
)`,
    relatedWidgets: ['AnimatedOpacity', 'AnimatedContainer', 'AnimationController'],
    preview: '<div style="width:50px;height:30px;background:#64b5f6;border-radius:6px;animation:fadeIn 1s ease-in-out">Animate</div><style>@keyframes fadeIn{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}</style>',
    detailedDoc: {
      overview: 'flutter_animate 提供简洁的声明式 API 来实现复杂动画，无需手动管理 AnimationController。支持链式调用、效果组合、时间单位扩展等功能。',
      useCases: [
        '页面进入/退出动画',
        '列表项依次动画',
        '按钮交互动画',
        '任何需要简单动画的场景'
      ],
      commonPatterns: [
        { title: '依次动画', code: 'ListView(children: items.map((e) => e.animate(delay: 100.ms).fadeIn()).toList())' },
        { title: '组合效果', code: 'child.animate().fadeIn().slideX().scale()' },
        { title: '自定义效果', code: 'Animate(effects: [CustomEffect(...)], child: child)' }
      ],
      pitfalls: [
        '大量动画同时执行可能影响性能',
        '需要精确控制动画时使用传统 AnimationController',
        '时间单位扩展需要导入 flutter_animate 包'
      ],
      performance: '良好。底层使用 Flutter 原生动画系统，性能优秀。'
    }
  },

  // get 包 - GetMaterialApp
  {
    id: 'getmaterialapp',
    name: 'GetMaterialApp',
    description: 'GetX 路由和状态管理的应用入口',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'get',
    properties: [
      { name: 'home', type: 'Widget?', description: '首页' },
      { name: 'getPages', type: 'List<GetPage>?', description: '路由页面列表' },
      { name: 'initialRoute', type: 'String?', description: '初始路由' },
      { name: 'defaultTransition', type: 'Transition?', description: '默认过渡动画' },
      { name: 'theme', type: 'ThemeData?', description: '应用主题' },
      { name: 'enableLog', type: 'bool?', description: '是否启用日志' }
    ],
    usageExample: `GetMaterialApp(
  title: 'My App',
  initialRoute: '/',
  getPages: [
    GetPage(name: '/', page: () => HomePage()),
    GetPage(name: '/detail', page: () => DetailPage(), transition: Transition.cupertino),
  ],
  theme: ThemeData.light(),
  enableLog: true,
)`,
    relatedWidgets: ['MaterialApp', 'GetPage', 'GetX'],
    preview: '<div style="width:80px;height:50px;background:#1976d2;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:10px">GetX App</div>',
    detailedDoc: {
      overview: 'GetMaterialApp 是 GetX 包提供的 MaterialApp 替代品，在保留所有 MaterialApp 功能的基础上，增加了路由管理、依赖注入、主题切换等便捷功能。',
      useCases: [
        '使用 GetX 进行路由管理',
        '需要简单状态管理的场景',
        '需要全局 Snackbar/Dialog 的场景',
        '多语言国际化应用'
      ],
      commonPatterns: [
        { title: '命名路由', code: 'Get.toNamed(\'/detail\');' },
        { title: '带参数路由', code: 'Get.to(() => DetailPage(), arguments: data);' },
        { title: '替换路由', code: 'Get.off(() => NewPage());' }
      ],
      pitfalls: [
        'GetX 是非官方包，大型项目建议谨慎评估',
        '过度使用全局状态可能导致代码难以维护',
        '需要理解 GetX 的生命周期管理'
      ],
      performance: '优秀。路由和状态管理性能优秀，无额外开销。'
    }
  },

  // provider 包 - ChangeNotifierProvider
  {
    id: 'changenotifierprovider',
    name: 'ChangeNotifierProvider',
    description: 'Provider 状态管理核心组件',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'high',
    usageDisplay: '常用',
    package: 'provider',
    properties: [
      { name: 'create', type: 'Create<T>', required: true, description: '创建状态对象的回调' },
      { name: 'child', type: 'Widget?', description: '子组件' },
      { name: 'builder', type: 'WidgetBuilder?', description: '构建器（与 child 互斥）' },
      { name: 'dispose', type: 'Dispose<T>?', description: '销毁回调' }
    ],
    usageExample: `ChangeNotifierProvider(
  create: (context) => CartProvider(),
  child: Consumer<CartProvider>(
    builder: (context, cart, child) {
      return Text('Total: \${cart.total}');
    },
  ),
)`,
    relatedWidgets: ['Provider', 'Consumer', 'Selector'],
    preview: '<div style="width:60px;height:40px;background:#1976d2;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:8px">Provider</div>',
    detailedDoc: {
      overview: 'Provider 是官方推荐的状态管理方案，基于 InheritedWidget 实现。ChangeNotifierProvider 是最常用的 Provider 类型，配合 ChangeNotifier 实现状态通知。',
      useCases: [
        '应用全局状态管理（用户信息、购物车等）',
        '跨组件共享数据',
        '需要响应式更新的场景',
        '替代 setState 管理复杂状态'
      ],
      commonPatterns: [
        { title: '多 Provider', code: 'MultiProvider(providers: [ChangeNotifierProvider(...), Provider(...)], child: child)' },
        { title: 'Consumer 局部刷新', code: 'Consumer<Model>(builder: (c, m, _) => Text(m.value))' },
        { title: 'Selector 性能优化', code: 'Selector<Model, String>(selector: (c, m) => m.value, builder: ...)' }
      ],
      pitfalls: [
        '避免在 build 方法中创建 Provider，会导致重复创建',
        'Consumer 会重建，复杂场景使用 Selector 优化',
        '需要在 dispose 中释放资源时，使用 dispose 参数'
      ],
      performance: '优秀。基于 InheritedWidget，性能优秀，是官方推荐方案。'
    }
  },

  // lottie 包
  {
    id: 'lottie',
    name: 'Lottie',
    description: '播放 After Effects 动画',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'lottie',
    properties: [
      { name: 'asset', type: 'String', description: 'Lottie 资源路径' },
      { name: 'width', type: 'double?', description: '宽度' },
      { name: 'height', type: 'double?', description: '高度' },
      { name: 'repeat', type: 'bool', description: '是否重复播放', defaultValue: 'true' },
      { name: 'reverse', type: 'bool', description: '是否反向播放', defaultValue: 'false' },
      { name: 'controller', type: 'AnimationController?', description: '动画控制器' }
    ],
    usageExample: `// 从资源播放
Lottie.asset('assets/loading.json', width: 100, height: 100)

// 从网络播放
Lottie.network('https://example.com/animation.json')

// 控制播放
Lottie.asset('animation.json', controller: _animationController)`,
    relatedWidgets: ['Animation', 'Rive', 'Spinkit'],
    preview: '<div style="width:50px;height:50px;background:conic-gradient(from 0deg,#1976d2,#64b5f6,#1976d2);border-radius:50%;animation:spin 1s linear infinite"></div><style>@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>',
    detailedDoc: {
      overview: 'Lottie 支持播放 After Effects 导出的 JSON 动画文件，提供丰富的动效资源。lottie 包是 Flutter 社区的实现，支持资源、网络、文件等多种加载方式。',
      useCases: [
        '加载动画（loading、success、error）',
        '引导页动画',
        '按钮交互动画',
        '复杂的 UI 动效'
      ],
      commonPatterns: [
        { title: '自动播放', code: 'Lottie.asset(\'animation.json\', repeat: true)' },
        { title: '控制播放', code: 'Lottie.asset(\'animation.json\', controller: _controller, onLoaded: (composition) {...})' },
        { title: '网络动画', code: 'Lottie.network(url, repeat: false)' }
      ],
      pitfalls: [
        '复杂的 Lottie 文件可能影响性能',
        '大文件需要预加载',
        '在列表中使用注意复用问题'
      ],
      performance: '中等。简单动画性能优秀，复杂动画需要优化。'
    }
  },

  // flutter_spinkit 包
  {
    id: 'spinkit',
    name: 'SpinKit',
    description: '多种样式的加载动画集合',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'flutter_spinkit',
    properties: [
      { name: 'color', type: 'Color?', description: '加载动画颜色' },
      { name: 'size', type: 'double?', description: '加载动画大小' },
      { name: 'duration', type: 'Duration?', description: '动画持续时间' }
    ],
    usageExample: `// 旋转圆圈
SpinKitFadingCircle(color: Colors.blue)

// 脉冲效果
SpinKitPulse(color: Colors.blue)

// 波浪效果
SpinKitWave(color: Colors.blue, itemCount: 5)

// 三球旋转
SpinKitThreeBounce(color: Colors.blue)`,
    relatedWidgets: ['CircularProgressIndicator', 'Lottie', 'Shimmer'],
    preview: '<div style="display:flex;gap:4px"><span style="width:12px;height:12px;background:#1976d2;border-radius:50%;animation:pulse1 1s infinite"></span><span style="width:12px;height:12px;background:#1976d2;border-radius:50%;animation:pulse2 1s infinite"></span><span style="width:12px;height:12px;background:#1976d2;border-radius:50%;animation:pulse3 1s infinite"></span></div><style>@keyframes pulse1{0%,100%{opacity:1}50%{opacity:0.3}}@keyframes pulse2{0%,100%{opacity:0.3}50%{opacity:1}}@keyframes pulse3{0%,100%{opacity:0.5}50%{opacity:0.5}}</style>',
    detailedDoc: {
      overview: 'flutter_spinkit 提供 50+ 种精美的加载动画样式，无需自定义动画即可使用。每种样式都有对应的 Widget，使用简单。',
      useCases: [
        '数据加载中的 loading 提示',
        '页面刷新动画',
        '提交处理中的等待动画',
        '任何需要加载指示的场景'
      ],
      commonPatterns: [
        { title: '经典旋转', code: 'SpinKitFadingCircle(color: Colors.blue, size: 50)' },
        { title: '脉冲效果', code: 'SpinKitPulse(color: Colors.blue, size: 50)' },
        { title: '自定义时长', code: 'SpinKitWave(color: Colors.blue, duration: Duration(seconds: 1))' }
      ],
      pitfalls: [
        '动画会持续运行，不需要时及时销毁',
        '在暗色主题下注意颜色对比度',
        '部分复杂样式可能影响性能'
      ],
      performance: '良好。简单样式性能优秀，复杂样式注意使用场景。'
    }
  },

  // auto_size_text 包
  {
    id: 'autosizetext',
    name: 'AutoSizeText',
    description: '自动调整字体大小以适应容器',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'auto_size_text',
    properties: [
      { name: 'data', type: 'String', required: true, description: '文本内容' },
      { name: 'maxLines', type: 'int?', description: '最大行数' },
      { name: 'minFontSize', type: 'double', description: '最小字体大小', defaultValue: '12' },
      { name: 'maxFontSize', type: 'double', description: '最大字体大小', defaultValue: '70' },
      { name: 'stepGranularity', type: 'double', description: '字体调整粒度', defaultValue: '0.1' },
      { name: 'style', type: 'TextStyle?', description: '文本样式' }
    ],
    usageExample: `AutoSizeText(
  'This is a very long text that should automatically resize to fit the container',
  minFontSize: 10,
  maxFontSize: 20,
  maxLines: 2,
  overflow: TextOverflow.ellipsis,
)`,
    relatedWidgets: ['Text', 'RichText', 'FittedBox'],
    preview: '<div style="width:80px;height:30px;background:#f5f5f5;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:10px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Auto Fit Text</div>',
    detailedDoc: {
      overview: 'AutoSizeText 自动调整字体大小以适配给定约束，解决文本溢出问题。支持设置最小/最大字体范围、最大行数等，是 Text 的智能替代品。',
      useCases: [
        '动态长度的标题文本',
        '需要适配不同屏幕的文本',
        '按钮内的自适应文本',
        '卡片标题等受限空间文本'
      ],
      commonPatterns: [
        { title: '单行适配', code: 'AutoSizeText(title, minFontSize: 12, maxFontSize: 20, maxLines: 1)' },
        { title: '多行截断', code: 'AutoSizeText(text, maxLines: 2, overflow: TextOverflow.ellipsis)' },
        { title: 'RichText 支持', code: 'AutoSizeText.rich(TextSpan(children: [...]))' }
      ],
      pitfalls: [
        '字体计算需要额外开销，大量使用注意性能',
        'minFontSize 设置过小可能影响可读性',
        '在列表中使用建议缓存计算结果'
      ],
      performance: '良好。字体计算开销小，大量使用时注意优化。'
    }
  },

  // flutter_staggered_grid_view 包
  {
    id: 'staggeredgridview',
    name: 'StaggeredGridView',
    description: '瀑布流网格布局',
    category: 'third-party',
    categoryDisplay: '第三方',
    usageLevel: 'medium',
    usageDisplay: '一般',
    package: 'flutter_staggered_grid_view',
    properties: [
      { name: 'crossAxisCount', type: 'int', required: true, description: '列数' },
      { name: 'mainAxisSpacing', type: 'double', description: '主轴方向间距' },
      { name: 'crossAxisSpacing', type: 'double', description: '交叉轴方向间距' },
      { name: 'staggeredTileBuilder', type: 'StaggeredTileBuilder', required: true, description: '瀑布流瓦片构建器' },
      { name: 'itemCount', type: 'int', required: true, description: '子项数量' },
      { name: 'itemBuilder', type: 'IndexedWidgetBuilder', required: true, description: '子项构建器' }
    ],
    usageExample: `StaggeredGridView.countBuilder(
  crossAxisCount: 2,
  mainAxisSpacing: 8,
  crossAxisSpacing: 8,
  staggeredTileBuilder: (index) => StaggeredTile.count(1, index.isEven ? 2 : 1),
  itemBuilder: (context, index) => Card(child: Center(child: Text('\$index'))),
  itemCount: 20,
)`,
    relatedWidgets: ['GridView', 'MasonryGridView', 'SliverStaggeredGrid'],
    preview: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;width:60px"><div style="background:#e57373;border-radius:4px;height:40px"></div><div style="background:#81c784;border-radius:4px;height:20px"></div><div style="background:#64b5f6;border-radius:4px;height:20px"></div><div style="background:#ffd54f;border-radius:4px;height:40px"></div></div>',
    detailedDoc: {
      overview: 'flutter_staggered_grid_view 提供瀑布流布局，支持不同高度的网格项。新版 API 更简洁，支持 MasonryGridView 等新组件。',
      useCases: [
        '图片墙（不同尺寸图片）',
        '商品展示（不同内容高度）',
        '笔记卡片（类似 Pinterest）',
        '任何需要不等高网格的场景'
      ],
      commonPatterns: [
        { title: 'MasonryGridView', code: 'MasonryGridView.count(crossAxisCount: 2, mainAxisSpacing: 8, itemBuilder: ...)' },
        { title: '自定义瓦片', code: 'staggeredTileBuilder: (i) => StaggeredTile.count(1, i.isEven ? 2 : 1)' },
        { title: 'Sliver 版本', code: 'SliverStaggeredGrid.countBuilder(...)' }
      ],
      pitfalls: [
        '在 NestedScrollView 中需要特殊处理',
        '动态内容高度可能导致布局闪烁',
        '注意 API 版本差异（0.x 和 0.7+）'
      ],
      performance: '良好。基于 GridView 实现，性能优秀。'
    }
  }
];
