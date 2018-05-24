package {
  import flash.display.*;
  import flash.external.*;
  import flash.utils.*;
  public class s extends Sprite {
    public function s():void {
      setInterval(ExternalInterface.call, 1, 'f');
    }
  }
}