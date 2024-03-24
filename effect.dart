import 'package:fish_redux/fish_redux.dart';
import 'action.dart';
import 'state.dart';

Effect<Test77State> buildEffect() {
  return combineEffects(<Object, Effect<Test77State>>{
    Test77Action.action: _onAction,
  });
}

void _onAction(Action action, Context<Test77State> ctx) {
}
