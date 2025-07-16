import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 20px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  font-size: ${({ theme }) => theme.typography.sizes.h2.size}px;
  line-height: ${({ theme }) => theme.typography.sizes.h2.lineHeight}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.sizes.regular.size}px;
  line-height: ${({ theme }) => theme.typography.sizes.regular.lineHeight}px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  text-align: center;
  margin-bottom: 30px;
`;

export const ProgressBar = styled.View`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const ProgressFill = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ['#8aecff', '#5dd9f5'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))`
  height: 100%;
  border-radius: 2px;
`;

export const QuestionNumber = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  font-size: ${({ theme }) => theme.typography.sizes.small.size}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const QuestionContainer = styled.View`
  padding: 20px;
  flex: 1;
`;

export const QuestionText = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.semiBold};
  font-size: ${({ theme }) => theme.typography.sizes.h3.size}px;
  line-height: ${({ theme }) => theme.typography.sizes.h3.lineHeight}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  text-align: center;
`;

export const AnswerInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.sizes.regular.size}px;
  color: ${({ theme }) => theme.colors.text};
  min-height: 120px;
  max-height: 200px;
`;