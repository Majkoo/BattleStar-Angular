import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

   dupas: string[] = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis lacus quis orci sagittis, vel pulvinar nunc gravida. Pellentesque ullamcorper.',
      'In ut dui suscipit, feugiat sapien at, tempus magna. Donec dictum a neque ac pulvinar. Praesent id interdum nisl. Maecenas.',
      'Praesent luctus, enim ut vehicula tincidunt, erat ipsum placerat massa, nec convallis ipsum dui at lacus. Curabitur fermentum accumsan diam.',
      'Vestibulum dictum quam quis augue blandit accumsan. In mollis eros a turpis maximus, in malesuada ligula ullamcorper. Praesent quis lorem.',
      'Quisque commodo tristique sem, eget mollis lorem imperdiet elementum. Aenean blandit leo at risus efficitur, a tempus arcu accumsan. Pellentesque.',
      'Etiam nec tempus ex. Sed rutrum luctus neque, ac dapibus nunc laoreet ut. Curabitur mattis vestibulum lorem, eget convallis turpis.',
      'Phasellus ut scelerisque nisi, eget iaculis urna. Vestibulum odio mauris, aliquet in volutpat tristique, ultricies sed risus. Aliquam consectetur sollicitudin.',
      'Aliquam porta elementum sollicitudin. Phasellus ex quam, tincidunt sed nisi et, faucibus aliquam nisl. Morbi quis sollicitudin lorem, nec accumsan.',
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
