export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  console.log(`${notificationType}: ${message}`);
  // switch (notificationType) {
  //   case 'Email':
  //     console.log('Email: ', message);
  //     break;
  //   case 'Phone':
  //     console.log('Phone: ', message);
  //     break;
  //   case 'Console':
  //     console.log('Console: ', message);
  //     break;
  //   default:
  //     console.log(message);
  //     break;
  // }
}