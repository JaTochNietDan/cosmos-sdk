// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cosmos/authz/v1beta1/authz.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	github_com_gogo_protobuf_types "github.com/gogo/protobuf/types"
	_ "github.com/golang/protobuf/ptypes/timestamp"
	_ "github.com/regen-network/cosmos-proto"
	io "io"
	math "math"
	math_bits "math/bits"
	time "time"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf
var _ = time.Kitchen

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenericAuthorization gives the grantee unrestricted permissions to execute
// the provided method on behalf of the granter's account.
type GenericAuthorization struct {
	// method name to grant unrestricted permissions to execute
	// Note: MethodName() is already a method on `GenericAuthorization` type,
	// we need some custom naming here so using `MessageName`
	MessageName string `protobuf:"bytes,1,opt,name=method_name,json=methodName,proto3" json:"method_name,omitempty"`
}

func (m *GenericAuthorization) Reset()         { *m = GenericAuthorization{} }
func (m *GenericAuthorization) String() string { return proto.CompactTextString(m) }
func (*GenericAuthorization) ProtoMessage()    {}
func (*GenericAuthorization) Descriptor() ([]byte, []int) {
	return fileDescriptor_544dc2e84b61c637, []int{0}
}
func (m *GenericAuthorization) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenericAuthorization) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenericAuthorization.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenericAuthorization) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenericAuthorization.Merge(m, src)
}
func (m *GenericAuthorization) XXX_Size() int {
	return m.Size()
}
func (m *GenericAuthorization) XXX_DiscardUnknown() {
	xxx_messageInfo_GenericAuthorization.DiscardUnknown(m)
}

var xxx_messageInfo_GenericAuthorization proto.InternalMessageInfo

func (m *GenericAuthorization) GetMessageName() string {
	if m != nil {
		return m.MessageName
	}
	return ""
}

// AuthorizationGrant gives permissions to execute
// the provide method with expiration time.
type AuthorizationGrant struct {
	Authorization *types.Any `protobuf:"bytes,1,opt,name=authorization,proto3" json:"authorization,omitempty"`
	Expiration    time.Time  `protobuf:"bytes,2,opt,name=expiration,proto3,stdtime" json:"expiration"`
}

func (m *AuthorizationGrant) Reset()         { *m = AuthorizationGrant{} }
func (m *AuthorizationGrant) String() string { return proto.CompactTextString(m) }
func (*AuthorizationGrant) ProtoMessage()    {}
func (*AuthorizationGrant) Descriptor() ([]byte, []int) {
	return fileDescriptor_544dc2e84b61c637, []int{1}
}
func (m *AuthorizationGrant) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AuthorizationGrant) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AuthorizationGrant.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AuthorizationGrant) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthorizationGrant.Merge(m, src)
}
func (m *AuthorizationGrant) XXX_Size() int {
	return m.Size()
}
func (m *AuthorizationGrant) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthorizationGrant.DiscardUnknown(m)
}

var xxx_messageInfo_AuthorizationGrant proto.InternalMessageInfo

func (m *AuthorizationGrant) GetAuthorization() *types.Any {
	if m != nil {
		return m.Authorization
	}
	return nil
}

func (m *AuthorizationGrant) GetExpiration() time.Time {
	if m != nil {
		return m.Expiration
	}
	return time.Time{}
}

func init() {
	proto.RegisterType((*GenericAuthorization)(nil), "cosmos.authz.v1beta1.GenericAuthorization")
	proto.RegisterType((*AuthorizationGrant)(nil), "cosmos.authz.v1beta1.AuthorizationGrant")
}

func init() { proto.RegisterFile("cosmos/authz/v1beta1/authz.proto", fileDescriptor_544dc2e84b61c637) }

var fileDescriptor_544dc2e84b61c637 = []byte{
	// 333 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0xc1, 0x4e, 0xfa, 0x40,
	0x10, 0xc6, 0xbb, 0xff, 0xc3, 0x3f, 0xba, 0x84, 0x18, 0x9a, 0x1e, 0x84, 0x43, 0x4b, 0x38, 0x19,
	0x13, 0x5a, 0xd1, 0x9b, 0x37, 0x1a, 0x12, 0x4e, 0x78, 0x20, 0x9e, 0xf4, 0x40, 0xb6, 0x30, 0xb6,
	0x8d, 0x6e, 0xa7, 0xe9, 0x6e, 0x0d, 0xf0, 0x14, 0xbc, 0x86, 0x77, 0x1f, 0x82, 0x78, 0x22, 0x9e,
	0x3c, 0xa1, 0x29, 0x2f, 0x62, 0xe8, 0x2e, 0x09, 0xe0, 0x69, 0x67, 0xbe, 0xfd, 0xbe, 0xdf, 0x4e,
	0x76, 0x68, 0x73, 0x8c, 0x82, 0xa3, 0xf0, 0x58, 0x2e, 0xa3, 0xb9, 0xf7, 0xda, 0x09, 0x40, 0xb2,
	0x8e, 0xea, 0xdc, 0x34, 0x43, 0x89, 0xa6, 0xa5, 0x1c, 0xae, 0xd2, 0xb4, 0xa3, 0x51, 0x57, 0xea,
	0xa8, 0xf4, 0x78, 0xda, 0x52, 0x36, 0x0d, 0x27, 0x44, 0x0c, 0x5f, 0xc0, 0x2b, 0xbb, 0x20, 0x7f,
	0xf2, 0x64, 0xcc, 0x41, 0x48, 0xc6, 0x53, 0x6d, 0xb0, 0x42, 0x0c, 0x51, 0x05, 0xb7, 0x95, 0x56,
	0xeb, 0xc7, 0x31, 0x96, 0xcc, 0xd4, 0x55, 0xeb, 0x91, 0x5a, 0x7d, 0x48, 0x20, 0x8b, 0xc7, 0xdd,
	0x5c, 0x46, 0x98, 0xc5, 0x73, 0x26, 0x63, 0x4c, 0xcc, 0x2b, 0x5a, 0xe1, 0x20, 0x23, 0x9c, 0x8c,
	0x12, 0xc6, 0xe1, 0x9c, 0x34, 0xc9, 0xc5, 0xa9, 0x7f, 0x56, 0xac, 0x9d, 0xca, 0x00, 0x84, 0x60,
	0x21, 0xdc, 0x31, 0x0e, 0x43, 0xaa, 0x3c, 0xdb, 0xfa, 0xb6, 0xf6, 0xf9, 0xde, 0xae, 0x1e, 0x40,
	0x5a, 0x6f, 0x84, 0x9a, 0x07, 0x4a, 0x3f, 0x63, 0x89, 0x34, 0x07, 0xb4, 0xca, 0xf6, 0xd5, 0x92,
	0x5e, 0xb9, 0xb6, 0x5c, 0x35, 0xa6, 0xbb, 0x1b, 0xd3, 0xed, 0x26, 0x33, 0xbf, 0xf6, 0x71, 0x8c,
	0x1d, 0x1e, 0xa6, 0xcd, 0x1e, 0xa5, 0x30, 0x4d, 0xe3, 0x4c, 0xb1, 0xfe, 0x95, 0xac, 0xc6, 0x1f,
	0xd6, 0xfd, 0xee, 0xa7, 0xfc, 0x93, 0xe5, 0xda, 0x31, 0x16, 0xdf, 0x0e, 0x19, 0xee, 0xe5, 0xfc,
	0xde, 0xb2, 0xb0, 0xc9, 0xaa, 0xb0, 0xc9, 0x4f, 0x61, 0x93, 0xc5, 0xc6, 0x36, 0x56, 0x1b, 0xdb,
	0xf8, 0xda, 0xd8, 0xc6, 0xc3, 0x65, 0x18, 0xcb, 0x28, 0x0f, 0xdc, 0x31, 0x72, 0xbd, 0x0d, 0x7d,
	0xb4, 0xc5, 0xe4, 0xd9, 0x9b, 0xea, 0xfd, 0xca, 0x59, 0x0a, 0x22, 0xf8, 0x5f, 0xbe, 0x77, 0xf3,
	0x1b, 0x00, 0x00, 0xff, 0xff, 0x62, 0x49, 0x9d, 0xc0, 0xfc, 0x01, 0x00, 0x00,
}

func (m *GenericAuthorization) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenericAuthorization) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenericAuthorization) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.MessageName) > 0 {
		i -= len(m.MessageName)
		copy(dAtA[i:], m.MessageName)
		i = encodeVarintAuthz(dAtA, i, uint64(len(m.MessageName)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *AuthorizationGrant) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AuthorizationGrant) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AuthorizationGrant) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	n1, err1 := github_com_gogo_protobuf_types.StdTimeMarshalTo(m.Expiration, dAtA[i-github_com_gogo_protobuf_types.SizeOfStdTime(m.Expiration):])
	if err1 != nil {
		return 0, err1
	}
	i -= n1
	i = encodeVarintAuthz(dAtA, i, uint64(n1))
	i--
	dAtA[i] = 0x12
	if m.Authorization != nil {
		{
			size, err := m.Authorization.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAuthz(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuthz(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuthz(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenericAuthorization) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.MessageName)
	if l > 0 {
		n += 1 + l + sovAuthz(uint64(l))
	}
	return n
}

func (m *AuthorizationGrant) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Authorization != nil {
		l = m.Authorization.Size()
		n += 1 + l + sovAuthz(uint64(l))
	}
	l = github_com_gogo_protobuf_types.SizeOfStdTime(m.Expiration)
	n += 1 + l + sovAuthz(uint64(l))
	return n
}

func sovAuthz(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuthz(x uint64) (n int) {
	return sovAuthz(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenericAuthorization) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenericAuthorization: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenericAuthorization: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MessageName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MessageName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthz(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthz
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *AuthorizationGrant) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: AuthorizationGrant: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: AuthorizationGrant: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Authorization", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Authorization == nil {
				m.Authorization = &types.Any{}
			}
			if err := m.Authorization.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Expiration", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAuthz
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAuthz
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := github_com_gogo_protobuf_types.StdTimeUnmarshal(&m.Expiration, dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthz(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthz
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAuthz(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuthz
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthz
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAuthz
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuthz
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuthz
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuthz        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuthz          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuthz = fmt.Errorf("proto: unexpected end of group")
)
