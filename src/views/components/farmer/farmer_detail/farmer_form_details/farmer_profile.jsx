import { Form, Upload } from 'antd'
import React from 'react'
import { handle_before_upload, handle_upload, action, handle_file_changed, file_list } from "@helpers/file_upload"
import { useTranslation } from 'react-i18next'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const FarmerProfile = () => {
    console.log("file_list", file_list);
    const { t } = useTranslation()
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {file_list?.[0]?.url ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <Form.Item name={"profile"} label={t("profile")} >
            <Upload
                name="file"
                action={action}
                customRequest={(e) => handle_upload(e)}
                beforeUpload={(args) => handle_before_upload(args)}
                onChange={(e) => handle_file_changed(e)}
                previewFile={false}
                showUploadList={false}
                listType="picture-card"
                className="avatar-uploader"
            >
                {file_list?.[0]?.url ? (
                    <img
                        src={file_list?.[0]?.url}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </Form.Item>
    )
}

export default FarmerProfile
