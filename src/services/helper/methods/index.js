import {
  UIManager,
  LayoutAnimation,
  Platform,
  Linking,
  Share,
} from 'react-native';
import {appointmentStatuses, orderStatuses, rolesTypes} from '../data';
// import { faker } from '@faker-js/faker'
import {colors} from '../../utilities';
import {baseURL, endPoints} from '../../constants';

export const handleAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const checkExpiry = () => {
  var d1 = Date.parse('2012-11-01');
  var d2 = Date.parse('2012-11-04');
  var expiryDate = Date.parse('2020-12-18');
  var currentDate = Date.now();
  console.log(expiryDate > currentDate);
  if (expiryDate < currentDate) {
    return true;
  } else {
    return false;
  }
};

export const compareDate = () => {
  var date1 = new Date('December 25, 2017 01:30:00');
  var date2 = new Date('June 18, 2016 02:30:00');
  console.log(date1.getTime() > date2.getTime());
  //best to use .getTime() to compare dates
  //if (date1.getTime() === date2.getTime()) {
  //same date
  //}

  if (date1.getTime() > date2.getTime()) {
    return true;
  } else {
    return false;
  }
};

//validations
export const validateEmail = email => {
  // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re =
    /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
  return re.test(email);
};
export const hasLowerCase = str => {
  return /[a-z]/.test(str);
};
export const hasUpperCase = str => {
  return /[A-Z]/.test(str);
};

// export function generateRandomUsers() {
//     const isDietitian = faker.datatype.boolean();
//     const firstName = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const image = faker.image.avatar();

//     if (isDietitian) {
//         const rating = faker.number.int({ min: 0, max: 5, precision: 0.1 });
//         const reviewsCount = faker.number.int({ min: 1, max: 100 });

//         return {
//             firstName,
//             lastName,
//             image,
//             isDietitian,
//             rating,
//             reviewsCount,
//         };
//     } else {
//         return {
//             firstName,
//             lastName,
//             image,
//             isDietitian,
//         };
//     }
// }

export const shareApp = () => {
  const formattedText = `Download Pakistan Largest Exam Preparation App: https://brainbooks.pk/`;
  Share.share({
    message: formattedText,
    dialogTitle: 'Share App',
    title: 'Share App',
    url: 'https://brainbooks.pk/',
  })
    .then(result => {
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type: ' + result.activityType);
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    })
    .catch(err => {
      err && console.log(err);
    });
};

export const openPlayStore = () => {
  const packageName = 'com.your.app.package.name'; // Replace with your app's package name
  const url = `market://details?id=${packageName}`;

  Linking.canOpenURL(url)
    .then(() => Linking.openURL(url))
    .catch(() => {
      console.log('not opening playstore');
      // Handle fallback if Play Store cannot be opened directly
      // (e.g., open web browser link)
    });
};

export const openWebsite = endpoint => {
  const websiteUrl = baseURL + endPoints[endpoint]?.url_1;
  // console.log(websiteUrl);
  Linking.canOpenURL(websiteUrl)
    .then(() => Linking.openURL(websiteUrl))
    .catch(() => {
      console.log('Not Opening Website');
    });
};

export function generateChapters(maxNo, text, leastNo = 1) {
  const levels = [];
  for (let i = leastNo; i <= maxNo; i++) {
    levels.push({id: i, name: `${text} ${i}`});
  }
  return levels;
}

export const openWifiSettings = async () => {
  const wifiUrl =
    Platform.OS === 'ios' ? 'app-settings:WIFI' : 'wifi://settings';
  await Linking.openURL(wifiUrl);
};
