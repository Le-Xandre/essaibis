import 'package:fish_redux/fish_redux.dart';

import 'effect.dart';
import 'reducer.dart';
import 'state.dart';
import 'view.dart';

class Test77Page extends Page<Test77State, Map<String, dynamic>> {
  Test77Page()
      : super(
            initState: initState,
            effect: buildEffect(),
            reducer: buildReducer(),
            view: buildView,
            dependencies: Dependencies<Test77State>(
                adapter: null,
                slots: <String, Dependent<Test77State>>{
                }),
            middleware: <Middleware<Test77State>>[
            ],);

}
