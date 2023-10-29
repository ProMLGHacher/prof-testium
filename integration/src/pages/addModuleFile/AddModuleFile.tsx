import React from 'react'
import { useParams } from 'react-router-dom'
import { $api } from '../../shared/api/api'

const AddModuleFile = () => {

  const { moduleName } = useParams()

  return (
    <div>
      <input  type="file" onChange={(e) => {
        if (!e.target.files) {
          return
        }
        var formData = new FormData();
        formData.append("image", e.target.files[0])
        $api.post(`/upload/module/${moduleName}`, formData)
      }} />
    </div>
  )
}

export default AddModuleFile