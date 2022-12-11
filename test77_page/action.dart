import 'package:fish_redux/fish_redux.dart';

//TODO replace with your own action
enum Test77Action { action }

class Test77ActionCreator {
  static Action onAction() {
    return const Action(Test77Action.action);
  }
}
