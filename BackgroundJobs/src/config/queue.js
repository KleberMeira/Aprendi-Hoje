import 'dotenv/config';

import Queue from '../app/lib/Queue';
import RegistrationMail from '../app/job/RegistrationMail';

Queue.process(RegistrationMail.handle);
