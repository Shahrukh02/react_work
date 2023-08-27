import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {COLORS, baseOpacity} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Flex, Typography} from '../../atom-components';
import {UploadFileSvg} from '../../assets';
import ImagePicker from 'react-native-image-crop-picker';
import format from 'pretty-format';

const UploaderField = ({
  containerSt = {},
  inputStyle = {},
  label = '',
  error = '',
  handleChange = e => {},
  mb = 18,
  mt = 0,
  light = false,
  imageSetter,
  multipleImageSetter,
  multiple = false,
  ...props
}) => {
  const errorText = err => (
    <Text
      style={{
        color: COLORS.danger,
        fontSize: sizer.fontScale(10),
        paddingTop: sizer.moderateScale(8),
        ...Fonts.semiBold(),
      }}>
      {err}
    </Text>
  );

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: multiple ? false : true,
        multiple: multiple,
      });
      const selectedImage = image.path;

      uploadImage(selectedImage);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const openMultipleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: multiple ? false : true,
        multiple: multiple,
      }).then(e => {
        uploadImage(e);
      });
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const uploadImage = image => {
    let arr = [];
    multiple
      ? image.forEach((element, i) => {
          arr.push(image[i].path);
        })
      : null;
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: multiple ? arr : image,
        type: 'image/jpeg', // Modify the type based on your file format
        name: 'myImage.jpg', // Modify the name of the file
      });
      multiple
        ? multipleImageSetter(formData)
        : imageSetter(formData?._parts[0][1]);
    } catch (error) {
      console.log(
        '🚀 ~ file: uploader-feild.js:64 ~ uploadImage ~ error:',
        error,
      );
    }
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={baseOpacity}
        onPress={() =>
          multiple ? openMultipleImagePicker() : openImagePicker()
        }
        style={{
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        <Typography
          size={16}
          color={light ? COLORS.darkV1 : COLORS.greyV1}
          mB={12}>
          {label}
        </Typography>
        <Flex
          gap={sizer.fontScale(12)}
          flexStyle={{
            padding: sizer.fontScale(15),
            backgroundColor: COLORS.lightV3,
            borderWidth: 1,
            borderColor: COLORS.blue,
            borderStyle: 'dashed',
            borderRadius: sizer.fontScale(4),
          }}>
          <UploadFileSvg
            width={sizer.moderateScale(28)}
            height={sizer.moderateVerticalScale(25)}
          />
          <View>
            <Typography size={8} semiBold>
              Browse to upload your images
            </Typography>
            <Typography size={8} light color={COLORS.greyV1}>
              Supported formats: JPEG, PNG
            </Typography>
          </View>
        </Flex>
        {Boolean(error !== '') ? errorText(error) : null}
      </TouchableOpacity>
    </>
  );
};

export default UploaderField;
