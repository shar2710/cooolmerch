import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store' 
const home = () => {
  const snap=useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (<motion.div className="home" {...slideAnimation('left')}>

      </motion.div>)}
    </AnimatePresence>
  )
}

export default home