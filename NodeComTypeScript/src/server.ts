import app from './app'
import logger from './logger'


logger.info(`server is up and running on port 3333`)

app.listen(3333)