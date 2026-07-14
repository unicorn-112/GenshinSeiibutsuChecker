FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY . .


RUN chmod +x GenshinSeiibutsuChecker/mvnw
RUN cd GenshinSeiibutsuChecker && ./mvnw clean install -DskipTests

CMD ["java", "-jar", "GenshinSeiibutsuChecker/target/GenshinSeiibutsuChecker-0.0.1-SNAPSHOT.jar"]