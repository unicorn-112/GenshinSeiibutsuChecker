FROM openjdk:17-jdk-slim
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean install
CMD ["java", "-jar", "target/your-jar-name.jar"]