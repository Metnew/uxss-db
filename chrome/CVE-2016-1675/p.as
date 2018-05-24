package {
  import flash.display.*;
  import flash.external.*;
  import flash.printing.*;
  public class p extends Sprite {
    public function l():void {
      new PrintJob().start();
    }
    public function p():void {
      ExternalInterface.addCallback('l', l);
      ExternalInterface.call('top.c');
    }
  }
}