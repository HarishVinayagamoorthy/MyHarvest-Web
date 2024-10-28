import { Button, Form, Upload } from 'antd'
import React from 'react'
import { handle_before_upload, handle_upload, action, handle_file_changed, file_list } from "@helpers/file_upload"
import { useTranslation } from 'react-i18next'
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'

const FarmerIDProof = () => {
    console.log("file_list", file_list);
    const { t } = useTranslation()

    return (
        <Form.Item name={"id_proof"} label={t("id_proof")} >
            <Upload
                name="file"
                action={action}
                customRequest={(e) => handle_upload(e)}
                beforeUpload={(args) => handle_before_upload(args)}
                onChange={(e) => handle_file_changed(e)}
                previewFile={false}
                showUploadList={false}
                className="avatar-uploader"
            >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </Form.Item>
    )
}

export default FarmerIDProof
