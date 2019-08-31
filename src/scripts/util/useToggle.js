import { useState } from 'vue-hooks'

export default (defaultValue) => {
  const [toggleItem, setToggle] = useState(defaultValue)
  const toggleHandle = () => {
    setToggle(!toggleItem)
  }
  return [toggleItem, toggleHandle]
}
