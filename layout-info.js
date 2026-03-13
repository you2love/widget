// Widget 布局约束详细说明
const WIDGET_LAYOUT_INFO = {
  'container': {
    sizing: 'Container 的尺寸由以下优先级决定：1) constraints 参数 2) width/height 参数 3) 父组件约束 4) child 尺寸。Container 会先应用自己的约束，然后传递给 child。',
    constraints: 'Container 接收父组件的约束，然后根据 decoration、width、height 等创建自己的约束传递给 child。如果设置了 width/height，会创建固定大小的约束。如果设置了 constraints，会与父组件约束合并（取交集）。',
    layoutBehavior: 'Container 是有状态的渲染对象，会根据 child 大小和自身约束计算最终尺寸。如果 child 为 null，Container 会尝试填满可用空间。',
    commonIssues: [
      '在 Row/Column 中，Container 默认会收缩到 child 大小，需要用 Expanded 或设置固定尺寸',
      '同时设置 width 和 constraints 时，constraints 优先级更高',
      'decoration 会创建新的图层，影响性能'
    ]
  },
  'text': {
    sizing: 'Text 的宽度由父组件约束决定，高度由文本内容和行数决定。如果父组件给无限宽度，Text 会尝试单行显示（除非 maxLines 限制）。',
    constraints: 'Text 接收父组件约束，如果约束是紧的（固定值），Text 会遵守。如果约束是松的（如 0-∞），Text 会根据文本内容计算所需空间。maxLines 会限制高度。',
    layoutBehavior: 'Text 使用 Paragraph 渲染，会根据字体大小、字间距等计算尺寸。overflow: TextOverflow.ellipsis 需要配合 maxLines 使用。',
    commonIssues: [
      'Text 在 Row 中会尝试显示全部内容，导致溢出错误，需要用 Expanded 限制',
      'maxLines 不设置 overflow 不会显示省略号',
      '长文本会影响性能，使用 ListView.builder 优化'
    ]
  },
  'row': {
    sizing: 'Row 的宽度 = 所有 child 宽度之和 + 间距。高度 = 最高 child 的高度（受 crossAxisAlignment 影响）。Row 不会自动换行。',
    constraints: 'Row 接收父组件约束后，将垂直方向的约束传递给 child，水平方向给每个 child 传递松约束（0-∞）。如果 mainAxisSize: MainAxisSize.max，Row 会填满水平空间。',
    layoutBehavior: 'Row 按顺序布局 child，每个 child 可以有自己的宽度。Expanded/Flexible child 会占用剩余空间。',
    commonIssues: [
      'Row 中包含无限宽度的 child（如 Expanded 嵌套 Expanded）会导致布局错误',
      '在 SingleChildScrollView 中，Row 需要设置 shrinkWrap: true',
      'Row 不会自动换行，内容过多会溢出，需要换行用 Wrap'
    ]
  },
  'column': {
    sizing: 'Column 的高度 = 所有 child 高度之和 + 间距。宽度 = 最宽 child 的宽度（受 crossAxisAlignment 影响）。Column 不会自动滚动。',
    constraints: 'Column 接收父组件约束后，将水平方向的约束传递给 child，垂直方向给每个 child 传递松约束（0-∞）。如果 mainAxisSize: MainAxisSize.max，Column 会填满垂直空间。',
    layoutBehavior: 'Column 按顺序布局 child，每个 child 可以有自己的高度。Expanded/Flexible child 会占用剩余空间。',
    commonIssues: [
      'Column 中包含无限高度的 child（如 ListView）会导致布局错误，需要设置 shrinkWrap: true',
      '在 SingleChildScrollView 中，Column 需要设置 shrinkWrap: true 和 physics: NeverScrollableScrollPhysics()',
      'Column 默认 crossAxisAlignment 是 center，不是 start'
    ]
  },
  'stack': {
    sizing: 'Stack 的尺寸由最大的 non-positioned child 决定。positioned child（使用 Positioned 包裹）不参与尺寸计算。',
    constraints: 'Stack 接收父组件约束后，将约束传递给 non-positioned child。positioned child 接收由 top/left/right/bottom 决定的固定约束。',
    layoutBehavior: 'Stack 先布局 non-positioned child，然后布局 positioned child。alignment 决定 non-positioned child 的对齐方式。',
    commonIssues: [
      'positioned child 必须使用 Positioned 包裹，否则会溢出',
      'Stack 不会自动调整大小适应 positioned child',
      '多个 positioned child 重叠时，后绘制的在上层'
    ]
  },
  'expanded': {
    sizing: 'Expanded 会填满 Row/Column 中的剩余空间。如果有多个 Expanded，按 flex 比例分配剩余空间。',
    constraints: 'Expanded 给 child 传递紧约束（固定值），强制 child 填满 Expanded 的空间。Expanded 本身是 Flexible 的特例（fit: FlexFit.tight）。',
    layoutBehavior: 'Expanded 只能在 Row/Column 中使用。Row/Column 先布局非 Flexible child，然后计算剩余空间，最后分配给 Expanded。',
    commonIssues: [
      'Expanded 不能在 Row/Column 外使用',
      'Expanded 嵌套 Expanded 会导致布局错误',
      'Expanded 的 child 不能有无限尺寸'
    ]
  },
  'sizedbox': {
    sizing: 'SizedBox 的尺寸由 width/height 参数决定。如果未设置，SizedBox 会尝试匹配 child 尺寸。',
    constraints: 'SizedBox 接收父组件约束后，如果设置了 width/height，会创建固定约束传递给 child。SizedBox.shrink() 强制 child 为 0 大小。',
    layoutBehavior: 'SizedBox 是轻量级的尺寸约束组件，内部使用 RenderConstrainedBox。',
    commonIssues: [
      'SizedBox 在 Row/Column 中默认不会扩展，需要用 Expanded',
      'SizedBox.shrink() 用于创建空白间隔',
      '同时设置 width 和 constraints 时，constraints 优先级更高'
    ]
  },
  'listview': {
    sizing: 'ListView 在滚动方向上是无限长的。在垂直方向上，ListView 会填满父组件的宽度。',
    constraints: 'ListView 接收父组件约束后，在滚动方向给自己传递无限约束（∞），在垂直方向遵守父组件约束。shrinkWrap: true 时，ListView 会根据 child 计算尺寸。',
    layoutBehavior: 'ListView 使用 Sliver 架构，支持懒加载。ListView.builder 只渲染可见项。',
    commonIssues: [
      'ListView 在 Column 中需要包裹 Expanded 或设置 shrinkWrap: true',
      'ListView 默认 physics 是 AlwaysScrollableScrollPhysics，即使内容少也能滚动',
      '在 NestedScrollView 中需要特殊处理'
    ]
  },
  'gridview': {
    sizing: 'GridView 在滚动方向上是无限长的。网格的列数/间距由 gridDelegate 决定。',
    constraints: 'GridView 接收父组件约束后，在滚动方向给自己传递无限约束。gridDelegate 决定每个 cell 的尺寸。',
    layoutBehavior: 'GridView 使用 SliverGrid 架构，支持懒加载。SliverGridDelegateWithFixedCrossAxisCount 固定列数，SliverGridDelegateWithMaxCrossAxisExtent 固定最大宽度。',
    commonIssues: [
      'GridView 在 Column 中需要包裹 Expanded 或设置 shrinkWrap: true',
      'gridDelegate 的 childAspectRatio 决定 cell 的宽高比',
      '网格项尺寸计算：crossAxisExtent = (主轴长度 - 间距) / 列数'
    ]
  },
  'center': {
    sizing: 'Center 的尺寸由父组件约束和 child 尺寸共同决定。Center 会尝试填满父组件空间，但不会强制 child 扩展。',
    constraints: 'Center 接收父组件约束后，给 child 传递松约束（0-∞），child 可以选择自己的尺寸。',
    layoutBehavior: 'Center 是 Align 的特例（alignment: Alignment.center）。',
    commonIssues: [
      'Center 在 Row/Column 中可能不会按预期工作，因为 Row/Column 已经给了约束',
      'Center 不会改变 child 尺寸，只是居中',
      '需要强制填满空间用 SizedBox.expand()'
    ]
  },
  'padding': {
    sizing: 'Padding 的尺寸 = child 尺寸 + padding。Padding 会增加自身尺寸来容纳 padding。',
    constraints: 'Padding 接收父组件约束后，减去 padding 得到 child 约束。child 在减小后的约束中布局。',
    layoutBehavior: 'Padding 是轻量级组件，内部使用 RenderPadding。',
    commonIssues: [
      'Padding 会减少 child 可用空间，可能导致 child 尺寸变小',
      '在 Row/Column 中，Padding 会增加自身尺寸',
      '使用 EdgeInsets 创建 padding'
    ]
  },
  'align': {
    sizing: 'Align 的尺寸由父组件约束决定。Align 会尝试填满父组件空间，但不会强制 child 扩展。',
    constraints: 'Align 接收父组件约束后，给 child 传递松约束（0-∞）。widthFactor/heightFactor 可以控制 Align 相对于 child 的尺寸。',
    layoutBehavior: 'Align 根据 alignment 参数将 child 放置在可用空间中的指定位置。',
    commonIssues: [
      'Align 在 Row/Column 中可能不会按预期工作',
      'widthFactor: 2 表示 Align 宽度是 child 的 2 倍',
      'alignment 使用 Alignment(x, y)，范围 -1 到 1'
    ]
  },
  'aspectratio': {
    sizing: 'AspectRatio 的尺寸由父组件约束和 aspectRatio 共同决定。会尝试保持指定的宽高比。',
    constraints: 'AspectRatio 接收父组件约束后，根据 aspectRatio 计算 child 约束。如果父组件给固定宽度，高度 = 宽度 / aspectRatio。',
    layoutBehavior: 'AspectRatio 会调整 child 尺寸以保持宽高比。如果无法保持（约束冲突），会选择最接近的尺寸。',
    commonIssues: [
      'AspectRatio 在 Row/Column 中需要配合 Expanded 使用',
      'aspectRatio = 宽 / 高，16/9 表示宽屏',
      '约束冲突时，AspectRatio 优先遵守紧约束'
    ]
  },
  'constrainedbox': {
    sizing: 'ConstrainedBox 的尺寸由父组件约束和 constraints 参数共同决定（取交集）。',
    constraints: 'ConstrainedBox 接收父组件约束后，与 constraints 参数合并（取交集），然后传递给 child。',
    layoutBehavior: 'ConstrainedBox 用于添加额外的约束。minWidth/maxWidth/minHeight/maxHeight 控制尺寸范围。',
    commonIssues: [
      'ConstrainedBox 的 constraints 不能比父组件约束更松',
      'ConstrainedBox 在 Row/Column 中可能不起作用，因为 Row/Column 给的是松约束',
      '使用 BoxConstraints 创建约束'
    ]
  },
  'flexible': {
    sizing: 'Flexible 的尺寸由 Row/Column 的剩余空间和 flex 参数决定。fit: FlexFit.loose 时，Flexible 不会强制 child 填满空间。',
    constraints: 'Flexible 给 child 传递的约束取决于 fit：FlexFit.tight 传递紧约束，FlexFit.loose 传递松约束。',
    layoutBehavior: 'Flexible 是 Expanded 的基类。Expanded 是 Flexible(fit: FlexFit.tight) 的简写。',
    commonIssues: [
      'Flexible 只能在 Row/Column 中使用',
      'fit: FlexFit.loose 时，child 可以小于 Flexible 的空间',
      'flex 参数决定剩余空间的分配比例'
    ]
  },
  'wrap': {
    sizing: 'Wrap 的尺寸由 child 和换行情况决定。Wrap 会自动换行，宽度 = 最宽行的宽度，高度 = 所有行高度之和。',
    constraints: 'Wrap 接收父组件约束后，给每个 child 传递松约束。spacing 和 runSpacing 控制间距。',
    layoutBehavior: 'Wrap 按顺序布局 child，当一行放不下时自动换行。',
    commonIssues: [
      'Wrap 在 Row/Column 中可能需要限制宽度',
      'spacing 是主轴间距，runSpacing 是交叉轴间距',
      'Wrap 不会均匀分布 child，需要 alignment 控制'
    ]
  },
  'singlechildscrollview': {
    sizing: 'SingleChildScrollView 在滚动方向上是无限长的（可以容纳任意大小的 child）。在垂直方向上遵守父组件约束。',
    constraints: 'SingleChildScrollView 接收父组件约束后，在滚动方向给自己传递无限约束，然后传递给 child。',
    layoutBehavior: 'SingleChildScrollView 支持单个 child 的滚动。child 可以任意大，超出部分可滚动查看。',
    commonIssues: [
      'SingleChildScrollView 在 Column 中需要设置 shrinkWrap: true',
      '只能有一个 child，多个 child 需要用 Column 包裹',
      'scrollDirection 控制滚动方向'
    ]
  },
  'pageview': {
    sizing: 'PageView 的尺寸由父组件约束决定。PageView 会填满父组件空间。',
    constraints: 'PageView 接收父组件约束后，给每个 page 传递相同的约束（填满 PageView 空间）。',
    layoutBehavior: 'PageView 使用 PageStorage 保存页面状态。pageSnapping: true 启用页面吸附效果。',
    commonIssues: [
      'PageView 在 Column 中需要包裹 Expanded',
      'PageController 控制页面跳转',
      'onPageChanged 在页面切换后触发'
    ]
  },
  'image': {
    sizing: 'Image 的尺寸由父组件约束和 fit 参数共同决定。如果未设置 width/height，Image 会使用原始尺寸。',
    constraints: 'Image 接收父组件约束后，根据 fit 参数计算显示尺寸。BoxFit.cover 会填满空间但可能裁剪，BoxFit.contain 会完整显示但可能有空白。',
    layoutBehavior: 'Image 加载完成后会根据实际图片尺寸和 fit 参数重新布局。',
    commonIssues: [
      'Image 在网络加载前尺寸为 0，需要设置 width/height',
      'fit: BoxFit.cover 会裁剪图片',
      'fit: BoxFit.contain 可能留有空白'
    ]
  },
  'icon': {
    sizing: 'Icon 的尺寸由 size 参数决定。默认 size 是 24.0。',
    constraints: 'Icon 接收父组件约束后，创建固定大小的约束（size x size）传递给内部 Text（Icon 使用字体渲染）。',
    layoutBehavior: 'Icon 使用字体渲染，内部是 Text 组件。',
    commonIssues: [
      'Icon 默认大小是 24px，需要显式设置 size',
      'Icon 颜色受 TextStyle 影响',
      '自定义图标需要指定 fontFamily'
    ]
  },
  'floatingactionbutton': {
    sizing: 'FloatingActionButton 的尺寸由 mini 参数和 child 决定。mini: true 时尺寸较小。',
    constraints: 'FloatingActionButton 创建固定大小的约束（标准 56x56，mini 40x40）。',
    layoutBehavior: 'FloatingActionButton 通常放在 Scaffold 的 floatingActionButton 属性中，自动定位在右下角。',
    commonIssues: [
      'FAB 需要放在 Scaffold 中才能自动定位',
      'mini: true 减小 FAB 尺寸',
      'FAB.extended 支持更宽的按钮'
    ]
  },
  'appbar': {
    sizing: 'AppBar 的高度由 toolbarHeight 决定（默认 56）。如果有 bottom，总高度 = toolbarHeight + bottom.height。',
    constraints: 'AppBar 接收父组件约束（通常来自 Scaffold），创建固定高度的约束。',
    layoutBehavior: 'AppBar 通常放在 Scaffold 的 appBar 属性中。SliverAppBar 支持滚动收缩。',
    commonIssues: [
      'AppBar 默认有阴影，elevation: 0 移除',
      'AppBar 会自动处理状态栏安全区域',
      'actions 中的按钮会自动使用 IconTheme'
    ]
  },
  'card': {
    sizing: 'Card 的尺寸由 child 决定，加上内部 padding 和 margin。',
    constraints: 'Card 接收父组件约束后，传递给 child。elevation 不影响尺寸。',
    layoutBehavior: 'Card 内部使用 Material 组件，elevation 控制阴影高度。',
    commonIssues: [
      'Card 默认有圆角，shape 可以自定义',
      'elevation 过大会影响性能',
      'Card 会自动应用主题颜色'
    ]
  },
  'textfield': {
    sizing: 'TextField 的宽度由父组件约束决定。高度由内容行数决定（单行默认约 48px）。',
    constraints: 'TextField 接收父组件约束后，根据 decoration、maxLines 等计算尺寸。',
    layoutBehavior: 'TextField 内部使用 EditableText，支持自动滚动到光标位置。',
    commonIssues: [
      'TextField 在 Row 中需要包裹 Expanded',
      'maxLines: null 启用多行输入',
      'obscureText: true 用于密码输入'
    ]
  },
  'checkbox': {
    sizing: 'Checkbox 的尺寸固定（默认 18x18 的视觉大小，实际 48x48 包含点击区域）。',
    constraints: 'Checkbox 创建固定大小的约束。',
    layoutBehavior: 'Checkbox 是固定尺寸组件，不受父组件约束影响。',
    commonIssues: [
      'Checkbox 尺寸固定，不能直接设置 size',
      '需要配合 setState 使用',
      'CheckboxListTile 更方便'
    ]
  },
  'switch': {
    sizing: 'Switch 的尺寸固定（视觉大小约 50x32，实际 48x48 包含点击区域）。',
    constraints: 'Switch 创建固定大小的约束。',
    layoutBehavior: 'Switch 是固定尺寸组件，有动画效果。',
    commonIssues: [
      'Switch 尺寸固定，不能直接设置 size',
      '需要配合 setState 使用',
      'activeColor 是打开时的颜色'
    ]
  },
  'slider': {
    sizing: 'Slider 的高度固定（约 48px 包含点击区域）。宽度由父组件约束决定，会填满可用宽度。',
    constraints: 'Slider 接收父组件宽度约束，高度固定。',
    layoutBehavior: 'Slider 内部使用固定高度的轨道和滑块。',
    commonIssues: [
      'Slider 在 Row 中需要包裹 Expanded',
      'divisions 设置分段数',
      'value 必须在 min 和 max 之间'
    ]
  },
  'dropdownbutton': {
    sizing: 'DropdownButton 的宽度由内容或 isExpanded 决定。高度固定（约 48px）。',
    constraints: 'DropdownButton 接收父组件约束，isExpanded: true 时填满宽度。',
    layoutBehavior: 'DropdownButton 弹出菜单使用 Overlay，不占用额外空间。',
    commonIssues: [
      'DropdownButton 默认不填满宽度，需要 isExpanded: true',
      'value 必须是 items 中某个选项的值',
      'items 必须是 List<DropdownMenuItem<T>>'
    ]
  },
  'tabbar': {
    sizing: 'TabBar 的高度固定（约 48px）。宽度由父组件约束决定。',
    constraints: 'TabBar 接收父组件约束，创建固定高度的约束。',
    layoutBehavior: 'TabBar 通常放在 AppBar 的 bottom 属性中。isScrollable: true 支持滚动。',
    commonIssues: [
      'TabBar 需要 TabController',
      'tabs 数量必须与 TabBarView 的 children 数量一致',
      '可滚动 TabBar 需要 isScrollable: true'
    ]
  },
  'bottomnavigationbar': {
    sizing: 'BottomNavigationBar 的高度固定（约 56px）。宽度由父组件约束决定。',
    constraints: 'BottomNavigationBar 接收父组件约束，创建固定高度的约束。',
    layoutBehavior: 'BottomNavigationBar 通常放在 Scaffold 的 bottomNavigationBar 属性中。',
    commonIssues: [
      'items 少于 3 个使用 fixed 模式',
      'items 多于 3 个使用 shifting 模式',
      'currentIndex 必须与 items 索引对应'
    ]
  },
  'animatedcontainer': {
    sizing: 'AnimatedContainer 的尺寸计算与 Container 相同，但变化时会执行动画。',
    constraints: 'AnimatedContainer 接收父组件约束后，与 Container 相同方式处理。',
    layoutBehavior: 'AnimatedContainer 监听属性变化，自动执行动画。duration 必须设置。',
    commonIssues: [
      '必须设置 duration',
      '属性变化时自动执行动画',
      '可以同时动画多个属性'
    ]
  },
  'visibility': {
    sizing: 'Visibility 的尺寸取决于 visible 和 replacement。visible: true 时显示 child，false 时显示 replacement（默认 SizedBox.shrink() 尺寸为 0）。',
    constraints: 'Visibility 接收父组件约束后，传递给当前显示的组件。',
    layoutBehavior: 'Visibility 不改变布局，只是切换显示的组件。maintainSize 等参数控制隐藏时的行为。',
    commonIssues: [
      'visible: false 时默认保留布局空间（replacement 是 SizedBox.shrink()）',
      '使用 replacement 可以显示替代组件',
      '完全不渲染用 Offstage'
    ]
  },
  'offstage': {
    sizing: 'Offstage 的尺寸取决于 offstage。offstage: true 时尺寸为 0，但 child 仍然布局（只是不显示）。',
    constraints: 'Offstage 接收父组件约束后，无论 offstage 值如何，都给 child 传递相同约束。',
    layoutBehavior: 'Offstage 隐藏 child 但保留布局空间。child 仍然会布局和渲染，只是不显示。',
    commonIssues: [
      'Offstage 隐藏但保留空间',
      'child 仍然会消耗性能',
      '完全不渲染用 Visibility 或条件渲染'
    ]
  },
  'gesturedetector': {
    sizing: 'GestureDetector 的尺寸由 child 决定。如果 child 为 null，GestureDetector 会填满父组件空间。',
    constraints: 'GestureDetector 接收父组件约束后，传递给 child。',
    layoutBehavior: 'GestureDetector 是手势检测包装器，不改变 child 布局。',
    commonIssues: [
      'GestureDetector 会吸收手势事件',
      'child 为 null 时填满父组件',
      '需要透明背景时 Container 颜色设为透明'
    ]
  },
  'inkwell': {
    sizing: 'InkWell 的尺寸由 child 决定。',
    constraints: 'InkWell 接收父组件约束后，传递给 child。',
    layoutBehavior: 'InkWell 需要 Material 祖先才能显示水波纹效果。',
    commonIssues: [
      'InkWell 需要 Material 祖先',
      '水波纹效果受 Material 裁剪影响',
      'onTap 和 onDoubleTap 可能冲突'
    ]
  },
  'cliprrect': {
    sizing: 'ClipRRect 的尺寸由 child 决定。borderRadius 不影响尺寸。',
    constraints: 'ClipRRect 接收父组件约束后，传递给 child。',
    layoutBehavior: 'ClipRRect 对 child 进行圆角裁剪。裁剪操作会影响性能。',
    commonIssues: [
      'ClipRRect 会影响性能，避免大量使用',
      'borderRadius 可以是 BorderRadius.circular',
      '裁剪后子组件超出部分不可见'
    ]
  },
  'clipoval': {
    sizing: 'ClipOval 的尺寸由 child 决定。',
    constraints: 'ClipOval 接收父组件约束后，传递给 child。',
    layoutBehavior: 'ClipOval 使用椭圆形裁剪 child。通常用于创建圆形图片。',
    commonIssues: [
      'ClipOval 会裁剪成椭圆/圆形',
      'child 应该是正方形才能得到正圆',
      '可以使用 CircleAvatar 替代'
    ]
  },
  'safearea': {
    sizing: 'SafeArea 的尺寸 = 父组件约束 - 系统边界（状态栏、刘海、底部指示条等）。',
    constraints: 'SafeArea 接收父组件约束后，减去安全区域，传递给 child。',
    layoutBehavior: 'SafeArea 自动检测系统边界，添加相应的 padding。',
    commonIssues: [
      'SafeArea 在 web 和桌面端可能不需要',
      'top/bottom 参数控制是否避免对应边界',
      'minimum 设置最小 padding'
    ]
  },
  'layoutbuilder': {
    sizing: 'LayoutBuilder 的尺寸由父组件约束和 builder 返回值共同决定。',
    constraints: 'LayoutBuilder 接收父组件约束后，通过 builder 参数传递给构建函数。',
    layoutBehavior: 'LayoutBuilder 不渲染任何内容，只是提供约束信息给 builder 函数。',
    commonIssues: [
      'LayoutBuilder 的 builder 在约束变化时重新调用',
      '不能在 builder 中返回 null',
      'Builder 是 LayoutBuilder 的简化版本'
    ]
  },
  'mediquery': {
    sizing: 'MediaQuery 的尺寸由 child 决定。MediaQuery 不改变布局。',
    constraints: 'MediaQuery 接收父组件约束后，传递给 child。',
    layoutBehavior: 'MediaQuery 提供屏幕信息给子树，不改变布局。',
    commonIssues: [
      'MediaQuery.of(context) 获取屏幕信息',
      'MediaQuery 可以覆盖父级的信息',
      'textScaleFactor 影响文本大小'
    ]
  },
  'futurebuilder': {
    sizing: 'FutureBuilder 的尺寸由 builder 返回的 widget 决定。',
    constraints: 'FutureBuilder 接收父组件约束后，传递给 builder 返回的 widget。',
    layoutBehavior: 'FutureBuilder 根据 Future 状态重建 UI。不同状态可能返回不同尺寸的 widget。',
    commonIssues: [
      'future 变化时需要使用 key',
      '避免在 builder 中创建新的 Future',
      'snapshot.connectionState 有 waiting/active/done'
    ]
  },
  'streambuilder': {
    sizing: 'StreamBuilder 的尺寸由 builder 返回的 widget 决定。',
    constraints: 'StreamBuilder 接收父组件约束后，传递给 builder 返回的 widget。',
    layoutBehavior: 'StreamBuilder 根据 Stream 数据重建 UI。数据变化时可能返回不同尺寸的 widget。',
    commonIssues: [
      'Stream 会持续发射数据，注意内存泄漏',
      '可以使用 initialData 设置初始值',
      'snapshot.data 是最新数据'
    ]
  },
  'hero': {
    sizing: 'Hero 的尺寸由 child 决定。动画过程中尺寸会变化。',
    constraints: 'Hero 接收父组件约束后，传递给 child。',
    layoutBehavior: 'Hero 在页面切换时创建共享元素动画。两个页面的 Hero 使用相同 tag。',
    commonIssues: [
      '两个页面的 tag 必须相同',
      'Hero 的 child 必须是同一个类型',
      'Hero 动画在 Navigator 推送/弹出时执行'
    ]
  }
};
