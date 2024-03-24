import 'package:fish_redux/fish_redux.dart';

import 'action.dart';
import 'state.dart';

Reducer<Test77State> buildReducer() {
  return asReducer(
    <Object, Reducer<Test77State>>{
      Test77Action.action: _onAction,
    },
  );
}

Test77State _onAction(Test77State state, Action action) {
  final Test77State newState = state.clone();
  return newState;
}
