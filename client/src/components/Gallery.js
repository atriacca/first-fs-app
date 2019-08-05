import React, { Component } from "react"
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

// class Gallery extends React.Component {
class Gallery extends Component {
 
  render() {
 
    const images = [
      {
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p180x540/56500710_2520735584621110_4020063370144120832_n.jpg?_nc_cat=106&_nc_ht=scontent.fslc1-2.fna&oh=30772ebc88302db3176fdc7b100d72a3&oe=5D604FFC',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p180x540/56500710_2520735584621110_4020063370144120832_n.jpg?_nc_cat=106&_nc_ht=scontent.fslc1-2.fna&oh=30772ebc88302db3176fdc7b100d72a3&oe=5D604FFC',
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56523538_2117000941753027_8928063511649583104_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=687d12a52b4fbe3036920599d4f7600d&oe=5D5A0A7D',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56523538_2117000941753027_8928063511649583104_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=687d12a52b4fbe3036920599d4f7600d&oe=5D5A0A7D'
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56521116_2562924027111033_2243712351612174336_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=2e4ee0def51cb276be63da6cfc0270db&oe=5D643142',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56521116_2562924027111033_2243712351612174336_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=2e4ee0def51cb276be63da6cfc0270db&oe=5D643142'
      },{
        original: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56426826_2169201553157629_5575557416445018112_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=1824fba0ad6f8a12ce5e652d2c5d9245&oe=5D7710DD',
        thumbnail: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56426826_2169201553157629_5575557416445018112_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=1824fba0ad6f8a12ce5e652d2c5d9245&oe=5D7710DD'
      },{
        original: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56517261_2247406428648906_1233104815991554048_n.jpg?_nc_cat=109&_nc_ht=scontent.fslc1-1.fna&oh=9e26900b385619f32a8a67132bd1f5e9&oe=5D628BD4',
        thumbnail: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56517261_2247406428648906_1233104815991554048_n.jpg?_nc_cat=109&_nc_ht=scontent.fslc1-1.fna&oh=9e26900b385619f32a8a67132bd1f5e9&oe=5D628BD4'
      },{
        original: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56515084_2415220175177024_9014388944095150080_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=d07c98d19d3d6cdf3d46adff288327b6&oe=5D5402CF',
        thumbnail: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/p403x403/56515084_2415220175177024_9014388944095150080_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=d07c98d19d3d6cdf3d46adff288327b6&oe=5D5402CF'
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56517261_2078426058900584_8007878549576876032_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=60c9a177627298c39a85a58f044ca580&oe=5D714E49',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p403x403/56517261_2078426058900584_8007878549576876032_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=60c9a177627298c39a85a58f044ca580&oe=5D714E49'
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/s552x414/56583048_2292115827516798_2771109416160722944_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=753b134d9c28cf587923f57e8bb3998a&oe=5D676678',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/s552x414/56583048_2292115827516798_2771109416160722944_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=753b134d9c28cf587923f57e8bb3998a&oe=5D676678'
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p180x540/56644425_2155796407801729_2890130720938786816_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=f7289a0a51d606d2f453363ad69bea5a&oe=5D7261C5',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/p180x540/56644425_2155796407801729_2890130720938786816_n.jpg?_nc_cat=105&_nc_ht=scontent.fslc1-2.fna&oh=f7289a0a51d606d2f453363ad69bea5a&oe=5D7261C5'
      },{
        original: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/s552x414/56724018_2571848346159961_2213311568068739072_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=8493e3c567630f0cf5fb301ea90ea779&oe=5D6B46C1',
        thumbnail: 'https://scontent.fslc1-1.fna.fbcdn.net/v/t45.5328-0/s552x414/56724018_2571848346159961_2213311568068739072_n.jpg?_nc_cat=111&_nc_ht=scontent.fslc1-1.fna&oh=8493e3c567630f0cf5fb301ea90ea779&oe=5D6B46C1'
      },{
        original: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/s552x414/56546545_2732772143416295_1223781880805982208_n.jpg?_nc_cat=101&_nc_ht=scontent.fslc1-2.fna&oh=da9b7ee97ba2b09e9d9c8866ba467319&oe=5D740285',
        thumbnail: 'https://scontent.fslc1-2.fna.fbcdn.net/v/t45.5328-0/s552x414/56546545_2732772143416295_1223781880805982208_n.jpg?_nc_cat=101&_nc_ht=scontent.fslc1-2.fna&oh=da9b7ee97ba2b09e9d9c8866ba467319&oe=5D740285'
      },{
        original: 'bbb',
        thumbnail: 'bbb'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}
export default Gallery